package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"movie/x/movie/types"
)

func (k Keeper) StoredReviewAll(c context.Context, req *types.QueryAllStoredReviewRequest) (*types.QueryAllStoredReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedReviews []types.StoredReview
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedReviewStore := prefix.NewStore(store, types.KeyPrefix(types.StoredReviewKeyPrefix))

	pageRes, err := query.Paginate(storedReviewStore, req.Pagination, func(key []byte, value []byte) error {
		var storedReview types.StoredReview
		if err := k.cdc.Unmarshal(value, &storedReview); err != nil {
			return err
		}

		storedReviews = append(storedReviews, storedReview)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredReviewResponse{StoredReview: storedReviews, Pagination: pageRes}, nil
}

func (k Keeper) StoredReview(c context.Context, req *types.QueryGetStoredReviewRequest) (*types.QueryGetStoredReviewResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredReview(
		ctx,
		req.MovieId,
		req.Creator,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredReviewResponse{StoredReview: val}, nil
}
