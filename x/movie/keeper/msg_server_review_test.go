package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	keepertest "movie/testutil/keeper"
	"movie/x/movie/keeper"
	"movie/x/movie/types"
)

func setupReviewMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MovieKeeper(t)
	k.AppendMovie(
		ctx,
		types.Movie{
			Title:       "Adventure at Rio",
			Description: "HelloWorld",
		},
	)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}

func TestReviewMsgServerCreate(t *testing.T) {
	srv, ctx := setupReviewMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateReview(ctx, &types.MsgCreateReview{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestReviewMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateReview
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateReview{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateReview{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateReview{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupReviewMsgServer(t)
			_, err := srv.CreateReview(ctx, &types.MsgCreateReview{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateReview(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestReviewMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteReview
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteReview{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteReview{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteReview{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupReviewMsgServer(t)

			_, err := srv.CreateReview(ctx, &types.MsgCreateReview{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteReview(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestReviewMsgSrvWithNonExistMovie(t *testing.T) {
	creator := "A"
	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteReview
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteReview{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteReview{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteReview{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateReview(ctx, &types.MsgCreateReview{Creator: creator})
			require.Error(t, err)
		})
	}
}

func TestReviewMsgSrvWithDuplicatedReviewBySameUser(t *testing.T) {
	creator := types.Alice
	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteReview
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteReview{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteReview{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteReview{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {

			srv, ctx := setupReviewMsgServer(t)

			//Create first review
			reviewRes, err := srv.CreateReview(ctx, &types.MsgCreateReview{Creator: creator, MovieId: 0})
			require.NoError(t, err)
			require.Equal(t, uint64(0), reviewRes.Id)

			//Create second review
			_, err = srv.CreateReview(ctx, &types.MsgCreateReview{Creator: creator, MovieId: 0})
			require.Error(t, err)
			_, err = srv.DeleteReview(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
