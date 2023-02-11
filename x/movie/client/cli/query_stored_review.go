package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cast"
	"github.com/spf13/cobra"
	"movie/x/movie/types"
)

func CmdListStoredReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-stored-review",
		Short: "list all storedReview",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllStoredReviewRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.StoredReviewAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowStoredReview() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-stored-review [movie-id] [creator]",
		Short: "shows a storedReview",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argMovieId, err := cast.ToUint64E(args[0])
			if err != nil {
				return err
			}
			argCreator := args[1]

			params := &types.QueryGetStoredReviewRequest{
				MovieId: argMovieId,
				Creator: argCreator,
			}

			res, err := queryClient.StoredReview(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
