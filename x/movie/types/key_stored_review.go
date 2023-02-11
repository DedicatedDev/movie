package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// StoredReviewKeyPrefix is the prefix to retrieve all StoredReview
	StoredReviewKeyPrefix = "StoredReview/value/"
)

// StoredReviewKey returns the store key to retrieve a StoredReview from the index fields
func StoredReviewKey(
	movieId uint64,
	creator string,
) []byte {
	var key []byte

	movieIdBytes := make([]byte, 8)
	binary.BigEndian.PutUint64(movieIdBytes, movieId)
	key = append(key, movieIdBytes...)
	key = append(key, []byte("/")...)

	creatorBytes := []byte(creator)
	key = append(key, creatorBytes...)
	key = append(key, []byte("/")...)

	return key
}
