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

func (k Keeper) StoredMovieAll(c context.Context, req *types.QueryAllStoredMovieRequest) (*types.QueryAllStoredMovieResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storedMovies []types.StoredMovie
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storedMovieStore := prefix.NewStore(store, types.KeyPrefix(types.StoredMovieKeyPrefix))

	pageRes, err := query.Paginate(storedMovieStore, req.Pagination, func(key []byte, value []byte) error {
		var storedMovie types.StoredMovie
		if err := k.cdc.Unmarshal(value, &storedMovie); err != nil {
			return err
		}

		storedMovies = append(storedMovies, storedMovie)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStoredMovieResponse{StoredMovie: storedMovies, Pagination: pageRes}, nil
}

func (k Keeper) StoredMovie(c context.Context, req *types.QueryGetStoredMovieRequest) (*types.QueryGetStoredMovieResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStoredMovie(
		ctx,
		req.Title,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetStoredMovieResponse{StoredMovie: val}, nil
}
