package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredMovieKeyPrefix is the prefix to retrieve all StoredMovie
	StoredMovieKeyPrefix = "StoredMovie/value/"
)

// StoredMovieKey returns the store key to retrieve a StoredMovie from the index fields
func StoredMovieKey(
	title string,
) []byte {
	var key []byte

	titleBytes := []byte(title)
	key = append(key, titleBytes...)
	key = append(key, []byte("/")...)

	return key
}
