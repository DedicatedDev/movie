package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"movie/x/movie/types"
)

// SetStoredReview set a specific storedReview in the store from its index
func (k Keeper) SetStoredReview(ctx sdk.Context, storedReview types.StoredReview) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredReviewKeyPrefix))
	b := k.cdc.MustMarshal(&storedReview)
	store.Set(types.StoredReviewKey(
		storedReview.MovieId,
		storedReview.Creator,
	), b)
}

// GetStoredReview returns a storedReview from its index
func (k Keeper) GetStoredReview(
	ctx sdk.Context,
	movieId uint64,
	creator string,

) (val types.StoredReview, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredReviewKeyPrefix))

	b := store.Get(types.StoredReviewKey(
		movieId,
		creator,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredReview removes a storedReview from the store
func (k Keeper) RemoveStoredReview(
	ctx sdk.Context,
	movieId uint64,
	creator string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredReviewKeyPrefix))
	store.Delete(types.StoredReviewKey(
		movieId,
		creator,
	))
}

// GetAllStoredReview returns all storedReview
func (k Keeper) GetAllStoredReview(ctx sdk.Context) (list []types.StoredReview) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredReviewKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredReview
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
