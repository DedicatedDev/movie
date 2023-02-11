import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateMovie } from "./types/movie/movie/tx";
import { MsgUpdateMovie } from "./types/movie/movie/tx";
import { MsgDeleteMovie } from "./types/movie/movie/tx";
import { MsgCreateReview } from "./types/movie/movie/tx";
import { MsgUpdateReview } from "./types/movie/movie/tx";
import { MsgDeleteReview } from "./types/movie/movie/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/movie.movie.MsgCreateMovie", MsgCreateMovie],
    ["/movie.movie.MsgUpdateMovie", MsgUpdateMovie],
    ["/movie.movie.MsgDeleteMovie", MsgDeleteMovie],
    ["/movie.movie.MsgCreateReview", MsgCreateReview],
    ["/movie.movie.MsgUpdateReview", MsgUpdateReview],
    ["/movie.movie.MsgDeleteReview", MsgDeleteReview],
    
];

export { msgTypes }