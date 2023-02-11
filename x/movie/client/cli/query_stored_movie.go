package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"movie/x/movie/types"
)

func CmdListStoredMovie() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-stored-movie",
		Short: "list all storedMovie",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllStoredMovieRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.StoredMovieAll(context.Background(), params)
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

func CmdShowStoredMovie() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-stored-movie [title]",
		Short: "shows a storedMovie",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argTitle := args[0]

			params := &types.QueryGetStoredMovieRequest{
				Title: argTitle,
			}

			res, err := queryClient.StoredMovie(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
