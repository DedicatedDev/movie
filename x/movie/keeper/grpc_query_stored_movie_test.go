package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "movie/testutil/keeper"
	"movie/testutil/nullify"
	"movie/x/movie/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestStoredMovieQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNStoredMovie(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetStoredMovieRequest
		response *types.QueryGetStoredMovieResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetStoredMovieRequest{
				Title: msgs[0].Title,
			},
			response: &types.QueryGetStoredMovieResponse{StoredMovie: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetStoredMovieRequest{
				Title: msgs[1].Title,
			},
			response: &types.QueryGetStoredMovieResponse{StoredMovie: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetStoredMovieRequest{
				Title: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.StoredMovie(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestStoredMovieQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.MovieKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNStoredMovie(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllStoredMovieRequest {
		return &types.QueryAllStoredMovieRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.StoredMovieAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.StoredMovie), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.StoredMovie),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.StoredMovieAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.StoredMovie), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.StoredMovie),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.StoredMovieAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.StoredMovie),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.StoredMovieAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
