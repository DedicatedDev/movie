package movie_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "movie/testutil/keeper"
	"movie/testutil/nullify"
	"movie/x/movie"
	"movie/x/movie/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		MovieList: []types.Movie{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		MovieCount: 2,
		ReviewList: []types.Review{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		ReviewCount: 2,
		StoredMovieList: []types.StoredMovie{
			{
				Title: "0",
			},
			{
				Title: "1",
			},
		},
		StoredReviewList: []types.StoredReview{
			{
				MovieId: 0,
				Creator: "0",
			},
			{
				MovieId: 1,
				Creator: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MovieKeeper(t)
	movie.InitGenesis(ctx, *k, genesisState)
	got := movie.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.MovieList, got.MovieList)
	require.Equal(t, genesisState.MovieCount, got.MovieCount)
	require.ElementsMatch(t, genesisState.ReviewList, got.ReviewList)
	require.Equal(t, genesisState.ReviewCount, got.ReviewCount)
	require.ElementsMatch(t, genesisState.StoredMovieList, got.StoredMovieList)
	require.ElementsMatch(t, genesisState.StoredReviewList, got.StoredReviewList)
	// this line is used by starport scaffolding # genesis/test/assert
}
