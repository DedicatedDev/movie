package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/movie module sentinel errors
var (
	ErrMissedMovieTitle = sdkerrors.Register(ModuleName, 1100, "Empty movie title")
)
