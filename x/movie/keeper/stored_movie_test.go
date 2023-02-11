package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "movie/testutil/keeper"
	"movie/testutil/nullify"
	"movie/x/movie/keeper"
	"movie/x/movie/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNStoredMovie(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredMovie {
	items := make([]types.StoredMovie, n)
	for i := range items {
		items[i].Title = strconv.Itoa(i)

		keeper.SetStoredMovie(ctx, items[i])
	}
	return items
}

func TestStoredMovieGet(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	items := createNStoredMovie(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredMovie(ctx,
			item.Title,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredMovieRemove(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	items := createNStoredMovie(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredMovie(ctx,
			item.Title,
		)
		_, found := keeper.GetStoredMovie(ctx,
			item.Title,
		)
		require.False(t, found)
	}
}

func TestStoredMovieGetAll(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	items := createNStoredMovie(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredMovie(ctx)),
	)
}
