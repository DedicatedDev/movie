package keeper_test

import (
	"context"
	"testing"

	keepertest "movie/testutil/keeper"
	"movie/x/movie/keeper"
	"movie/x/movie/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MovieKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
