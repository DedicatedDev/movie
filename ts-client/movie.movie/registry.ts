import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateReview } from "./types/movie/movie/tx";
import { MsgDeleteMovie } from "./types/movie/movie/tx";
import { MsgUpdateReview } from "./types/movie/movie/tx";
import { MsgDeleteReview } from "./types/movie/movie/tx";
import { MsgUpdateMovie } from "./types/movie/movie/tx";
import { MsgCreateMovie } from "./types/movie/movie/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/movie.movie.MsgCreateReview", MsgCreateReview],
    ["/movie.movie.MsgDeleteMovie", MsgDeleteMovie],
    ["/movie.movie.MsgUpdateReview", MsgUpdateReview],
    ["/movie.movie.MsgDeleteReview", MsgDeleteReview],
    ["/movie.movie.MsgUpdateMovie", MsgUpdateMovie],
    ["/movie.movie.MsgCreateMovie", MsgCreateMovie],
    
];

export { msgTypes }