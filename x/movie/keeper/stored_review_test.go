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

func createNStoredReview(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.StoredReview {
	items := make([]types.StoredReview, n)
	for i := range items {
		items[i].MovieId = uint64(i)
		items[i].Creator = strconv.Itoa(i)

		keeper.SetStoredReview(ctx, items[i])
	}
	return items
}

func TestStoredReviewGet(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	items := createNStoredReview(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetStoredReview(ctx,
			item.MovieId,
			item.Creator,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestStoredReviewRemove(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	items := createNStoredReview(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveStoredReview(ctx,
			item.MovieId,
			item.Creator,
		)
		_, found := keeper.GetStoredReview(ctx,
			item.MovieId,
			item.Creator,
		)
		require.False(t, found)
	}
}

func TestStoredReviewGetAll(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	items := createNStoredReview(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllStoredReview(ctx)),
	)
}
