package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"movie/x/movie/types"
)

// SetStoredMovie set a specific storedMovie in the store from its index
func (k Keeper) SetStoredMovie(ctx sdk.Context, storedMovie types.StoredMovie) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredMovieKeyPrefix))
	b := k.cdc.MustMarshal(&storedMovie)
	store.Set(types.StoredMovieKey(
		storedMovie.Title,
	), b)
}

// GetStoredMovie returns a storedMovie from its index
func (k Keeper) GetStoredMovie(
	ctx sdk.Context,
	title string,

) (val types.StoredMovie, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredMovieKeyPrefix))

	b := store.Get(types.StoredMovieKey(
		title,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveStoredMovie removes a storedMovie from the store
func (k Keeper) RemoveStoredMovie(
	ctx sdk.Context,
	title string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredMovieKeyPrefix))
	store.Delete(types.StoredMovieKey(
		title,
	))
}

// GetAllStoredMovie returns all storedMovie
func (k Keeper) GetAllStoredMovie(ctx sdk.Context) (list []types.StoredMovie) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.StoredMovieKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.StoredMovie
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
