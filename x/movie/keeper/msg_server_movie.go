package keeper

import (
	"context"
	"fmt"

	"movie/x/movie/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMovie(goCtx context.Context, msg *types.MsgCreateMovie) (*types.MsgCreateMovieResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	//check movie already exist or not
	_, found := k.GetStoredMovie(ctx, msg.Title)
	if found {
		return nil, fmt.Errorf("[ERR] already exist this movie: %s", msg.Title)
	}

	var movie = types.Movie{
		Creator:     msg.Creator,
		Title:       msg.Title,
		Description: msg.Description,
		Year:        msg.Year,
	}

	id := k.AppendMovie(
		ctx,
		movie,
	)

	//register this movie to storedMovie
	storedMovie := types.StoredMovie{
		Title:   msg.Title,
		MovieId: id,
	}
	k.Keeper.SetStoredMovie(ctx, storedMovie)
	return &types.MsgCreateMovieResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateMovie(goCtx context.Context, msg *types.MsgUpdateMovie) (*types.MsgUpdateMovieResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var movie = types.Movie{
		Creator:     msg.Creator,
		Id:          msg.Id,
		Title:       msg.Title,
		Description: msg.Description,
		Year:        msg.Year,
	}

	// Checks that the element exists
	val, found := k.GetMovie(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetMovie(ctx, movie)

	return &types.MsgUpdateMovieResponse{}, nil
}

func (k msgServer) DeleteMovie(goCtx context.Context, msg *types.MsgDeleteMovie) (*types.MsgDeleteMovieResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetMovie(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}
	//Save review to storedReview
	k.RemoveStoredMovie(ctx, val.Title)
	return &types.MsgDeleteMovieResponse{}, nil
}
