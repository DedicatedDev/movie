/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Movie } from "./movie";
import { Params } from "./params";
import { Review } from "./review";
import { StoredMovie } from "./stored_movie";
import { StoredReview } from "./stored_review";

export const protobufPackage = "movie.movie";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMovieRequest {
  id: number;
}

export interface QueryGetMovieResponse {
  Movie: Movie | undefined;
}

export interface QueryAllMovieRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMovieResponse {
  Movie: Movie[];
  pagination: PageResponse | undefined;
}

export interface QueryGetReviewRequest {
  id: number;
}

export interface QueryGetReviewResponse {
  Review: Review | undefined;
}

export interface QueryAllReviewRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllReviewResponse {
  Review: Review[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStoredMovieRequest {
  title: string;
}

export interface QueryGetStoredMovieResponse {
  storedMovie: StoredMovie | undefined;
}

export interface QueryAllStoredMovieRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredMovieResponse {
  storedMovie: StoredMovie[];
  pagination: PageResponse | undefined;
}

export interface QueryGetStoredReviewRequest {
  movieId: number;
  creator: string;
}

export interface QueryGetStoredReviewResponse {
  storedReview: StoredReview | undefined;
}

export interface QueryAllStoredReviewRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllStoredReviewResponse {
  storedReview: StoredReview[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetMovieRequest(): QueryGetMovieRequest {
  return { id: 0 };
}

export const QueryGetMovieRequest = {
  encode(message: QueryGetMovieRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMovieRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMovieRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMovieRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetMovieRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMovieRequest>, I>>(object: I): QueryGetMovieRequest {
    const message = createBaseQueryGetMovieRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetMovieResponse(): QueryGetMovieResponse {
  return { Movie: undefined };
}

export const QueryGetMovieResponse = {
  encode(message: QueryGetMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Movie !== undefined) {
      Movie.encode(message.Movie, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMovieResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Movie = Movie.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMovieResponse {
    return { Movie: isSet(object.Movie) ? Movie.fromJSON(object.Movie) : undefined };
  },

  toJSON(message: QueryGetMovieResponse): unknown {
    const obj: any = {};
    message.Movie !== undefined && (obj.Movie = message.Movie ? Movie.toJSON(message.Movie) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetMovieResponse>, I>>(object: I): QueryGetMovieResponse {
    const message = createBaseQueryGetMovieResponse();
    message.Movie = (object.Movie !== undefined && object.Movie !== null) ? Movie.fromPartial(object.Movie) : undefined;
    return message;
  },
};

function createBaseQueryAllMovieRequest(): QueryAllMovieRequest {
  return { pagination: undefined };
}

export const QueryAllMovieRequest = {
  encode(message: QueryAllMovieRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMovieRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMovieRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMovieRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllMovieRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMovieRequest>, I>>(object: I): QueryAllMovieRequest {
    const message = createBaseQueryAllMovieRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllMovieResponse(): QueryAllMovieResponse {
  return { Movie: [], pagination: undefined };
}

export const QueryAllMovieResponse = {
  encode(message: QueryAllMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Movie) {
      Movie.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllMovieResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Movie.push(Movie.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMovieResponse {
    return {
      Movie: Array.isArray(object?.Movie) ? object.Movie.map((e: any) => Movie.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllMovieResponse): unknown {
    const obj: any = {};
    if (message.Movie) {
      obj.Movie = message.Movie.map((e) => e ? Movie.toJSON(e) : undefined);
    } else {
      obj.Movie = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllMovieResponse>, I>>(object: I): QueryAllMovieResponse {
    const message = createBaseQueryAllMovieResponse();
    message.Movie = object.Movie?.map((e) => Movie.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetReviewRequest(): QueryGetReviewRequest {
  return { id: 0 };
}

export const QueryGetReviewRequest = {
  encode(message: QueryGetReviewRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReviewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReviewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReviewRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryGetReviewRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetReviewRequest>, I>>(object: I): QueryGetReviewRequest {
    const message = createBaseQueryGetReviewRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryGetReviewResponse(): QueryGetReviewResponse {
  return { Review: undefined };
}

export const QueryGetReviewResponse = {
  encode(message: QueryGetReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Review !== undefined) {
      Review.encode(message.Review, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Review = Review.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReviewResponse {
    return { Review: isSet(object.Review) ? Review.fromJSON(object.Review) : undefined };
  },

  toJSON(message: QueryGetReviewResponse): unknown {
    const obj: any = {};
    message.Review !== undefined && (obj.Review = message.Review ? Review.toJSON(message.Review) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetReviewResponse>, I>>(object: I): QueryGetReviewResponse {
    const message = createBaseQueryGetReviewResponse();
    message.Review = (object.Review !== undefined && object.Review !== null)
      ? Review.fromPartial(object.Review)
      : undefined;
    return message;
  },
};

function createBaseQueryAllReviewRequest(): QueryAllReviewRequest {
  return { pagination: undefined };
}

export const QueryAllReviewRequest = {
  encode(message: QueryAllReviewRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllReviewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReviewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllReviewRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllReviewRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllReviewRequest>, I>>(object: I): QueryAllReviewRequest {
    const message = createBaseQueryAllReviewRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllReviewResponse(): QueryAllReviewResponse {
  return { Review: [], pagination: undefined };
}

export const QueryAllReviewResponse = {
  encode(message: QueryAllReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Review) {
      Review.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Review.push(Review.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllReviewResponse {
    return {
      Review: Array.isArray(object?.Review) ? object.Review.map((e: any) => Review.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllReviewResponse): unknown {
    const obj: any = {};
    if (message.Review) {
      obj.Review = message.Review.map((e) => e ? Review.toJSON(e) : undefined);
    } else {
      obj.Review = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllReviewResponse>, I>>(object: I): QueryAllReviewResponse {
    const message = createBaseQueryAllReviewResponse();
    message.Review = object.Review?.map((e) => Review.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredMovieRequest(): QueryGetStoredMovieRequest {
  return { title: "" };
}

export const QueryGetStoredMovieRequest = {
  encode(message: QueryGetStoredMovieRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredMovieRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredMovieRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredMovieRequest {
    return { title: isSet(object.title) ? String(object.title) : "" };
  },

  toJSON(message: QueryGetStoredMovieRequest): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredMovieRequest>, I>>(object: I): QueryGetStoredMovieRequest {
    const message = createBaseQueryGetStoredMovieRequest();
    message.title = object.title ?? "";
    return message;
  },
};

function createBaseQueryGetStoredMovieResponse(): QueryGetStoredMovieResponse {
  return { storedMovie: undefined };
}

export const QueryGetStoredMovieResponse = {
  encode(message: QueryGetStoredMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedMovie !== undefined) {
      StoredMovie.encode(message.storedMovie, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredMovieResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedMovie = StoredMovie.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredMovieResponse {
    return { storedMovie: isSet(object.storedMovie) ? StoredMovie.fromJSON(object.storedMovie) : undefined };
  },

  toJSON(message: QueryGetStoredMovieResponse): unknown {
    const obj: any = {};
    message.storedMovie !== undefined
      && (obj.storedMovie = message.storedMovie ? StoredMovie.toJSON(message.storedMovie) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredMovieResponse>, I>>(object: I): QueryGetStoredMovieResponse {
    const message = createBaseQueryGetStoredMovieResponse();
    message.storedMovie = (object.storedMovie !== undefined && object.storedMovie !== null)
      ? StoredMovie.fromPartial(object.storedMovie)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredMovieRequest(): QueryAllStoredMovieRequest {
  return { pagination: undefined };
}

export const QueryAllStoredMovieRequest = {
  encode(message: QueryAllStoredMovieRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredMovieRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredMovieRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredMovieRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredMovieRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredMovieRequest>, I>>(object: I): QueryAllStoredMovieRequest {
    const message = createBaseQueryAllStoredMovieRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredMovieResponse(): QueryAllStoredMovieResponse {
  return { storedMovie: [], pagination: undefined };
}

export const QueryAllStoredMovieResponse = {
  encode(message: QueryAllStoredMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedMovie) {
      StoredMovie.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredMovieResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedMovie.push(StoredMovie.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredMovieResponse {
    return {
      storedMovie: Array.isArray(object?.storedMovie)
        ? object.storedMovie.map((e: any) => StoredMovie.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredMovieResponse): unknown {
    const obj: any = {};
    if (message.storedMovie) {
      obj.storedMovie = message.storedMovie.map((e) => e ? StoredMovie.toJSON(e) : undefined);
    } else {
      obj.storedMovie = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredMovieResponse>, I>>(object: I): QueryAllStoredMovieResponse {
    const message = createBaseQueryAllStoredMovieResponse();
    message.storedMovie = object.storedMovie?.map((e) => StoredMovie.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetStoredReviewRequest(): QueryGetStoredReviewRequest {
  return { movieId: 0, creator: "" };
}

export const QueryGetStoredReviewRequest = {
  encode(message: QueryGetStoredReviewRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.movieId !== 0) {
      writer.uint32(8).uint64(message.movieId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredReviewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredReviewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.movieId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredReviewRequest {
    return {
      movieId: isSet(object.movieId) ? Number(object.movieId) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: QueryGetStoredReviewRequest): unknown {
    const obj: any = {};
    message.movieId !== undefined && (obj.movieId = Math.round(message.movieId));
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredReviewRequest>, I>>(object: I): QueryGetStoredReviewRequest {
    const message = createBaseQueryGetStoredReviewRequest();
    message.movieId = object.movieId ?? 0;
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseQueryGetStoredReviewResponse(): QueryGetStoredReviewResponse {
  return { storedReview: undefined };
}

export const QueryGetStoredReviewResponse = {
  encode(message: QueryGetStoredReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.storedReview !== undefined) {
      StoredReview.encode(message.storedReview, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetStoredReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetStoredReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedReview = StoredReview.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetStoredReviewResponse {
    return { storedReview: isSet(object.storedReview) ? StoredReview.fromJSON(object.storedReview) : undefined };
  },

  toJSON(message: QueryGetStoredReviewResponse): unknown {
    const obj: any = {};
    message.storedReview !== undefined
      && (obj.storedReview = message.storedReview ? StoredReview.toJSON(message.storedReview) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetStoredReviewResponse>, I>>(object: I): QueryGetStoredReviewResponse {
    const message = createBaseQueryGetStoredReviewResponse();
    message.storedReview = (object.storedReview !== undefined && object.storedReview !== null)
      ? StoredReview.fromPartial(object.storedReview)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredReviewRequest(): QueryAllStoredReviewRequest {
  return { pagination: undefined };
}

export const QueryAllStoredReviewRequest = {
  encode(message: QueryAllStoredReviewRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredReviewRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredReviewRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredReviewRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllStoredReviewRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredReviewRequest>, I>>(object: I): QueryAllStoredReviewRequest {
    const message = createBaseQueryAllStoredReviewRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllStoredReviewResponse(): QueryAllStoredReviewResponse {
  return { storedReview: [], pagination: undefined };
}

export const QueryAllStoredReviewResponse = {
  encode(message: QueryAllStoredReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.storedReview) {
      StoredReview.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllStoredReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllStoredReviewResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storedReview.push(StoredReview.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllStoredReviewResponse {
    return {
      storedReview: Array.isArray(object?.storedReview)
        ? object.storedReview.map((e: any) => StoredReview.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllStoredReviewResponse): unknown {
    const obj: any = {};
    if (message.storedReview) {
      obj.storedReview = message.storedReview.map((e) => e ? StoredReview.toJSON(e) : undefined);
    } else {
      obj.storedReview = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllStoredReviewResponse>, I>>(object: I): QueryAllStoredReviewResponse {
    const message = createBaseQueryAllStoredReviewResponse();
    message.storedReview = object.storedReview?.map((e) => StoredReview.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Movie by id. */
  Movie(request: QueryGetMovieRequest): Promise<QueryGetMovieResponse>;
  /** Queries a list of Movie items. */
  MovieAll(request: QueryAllMovieRequest): Promise<QueryAllMovieResponse>;
  /** Queries a Review by id. */
  Review(request: QueryGetReviewRequest): Promise<QueryGetReviewResponse>;
  /** Queries a list of Review items. */
  ReviewAll(request: QueryAllReviewRequest): Promise<QueryAllReviewResponse>;
  /** Queries a StoredMovie by index. */
  StoredMovie(request: QueryGetStoredMovieRequest): Promise<QueryGetStoredMovieResponse>;
  /** Queries a list of StoredMovie items. */
  StoredMovieAll(request: QueryAllStoredMovieRequest): Promise<QueryAllStoredMovieResponse>;
  /** Queries a StoredReview by index. */
  StoredReview(request: QueryGetStoredReviewRequest): Promise<QueryGetStoredReviewResponse>;
  /** Queries a list of StoredReview items. */
  StoredReviewAll(request: QueryAllStoredReviewRequest): Promise<QueryAllStoredReviewResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Movie = this.Movie.bind(this);
    this.MovieAll = this.MovieAll.bind(this);
    this.Review = this.Review.bind(this);
    this.ReviewAll = this.ReviewAll.bind(this);
    this.StoredMovie = this.StoredMovie.bind(this);
    this.StoredMovieAll = this.StoredMovieAll.bind(this);
    this.StoredReview = this.StoredReview.bind(this);
    this.StoredReviewAll = this.StoredReviewAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Movie(request: QueryGetMovieRequest): Promise<QueryGetMovieResponse> {
    const data = QueryGetMovieRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "Movie", data);
    return promise.then((data) => QueryGetMovieResponse.decode(new _m0.Reader(data)));
  }

  MovieAll(request: QueryAllMovieRequest): Promise<QueryAllMovieResponse> {
    const data = QueryAllMovieRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "MovieAll", data);
    return promise.then((data) => QueryAllMovieResponse.decode(new _m0.Reader(data)));
  }

  Review(request: QueryGetReviewRequest): Promise<QueryGetReviewResponse> {
    const data = QueryGetReviewRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "Review", data);
    return promise.then((data) => QueryGetReviewResponse.decode(new _m0.Reader(data)));
  }

  ReviewAll(request: QueryAllReviewRequest): Promise<QueryAllReviewResponse> {
    const data = QueryAllReviewRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "ReviewAll", data);
    return promise.then((data) => QueryAllReviewResponse.decode(new _m0.Reader(data)));
  }

  StoredMovie(request: QueryGetStoredMovieRequest): Promise<QueryGetStoredMovieResponse> {
    const data = QueryGetStoredMovieRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "StoredMovie", data);
    return promise.then((data) => QueryGetStoredMovieResponse.decode(new _m0.Reader(data)));
  }

  StoredMovieAll(request: QueryAllStoredMovieRequest): Promise<QueryAllStoredMovieResponse> {
    const data = QueryAllStoredMovieRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "StoredMovieAll", data);
    return promise.then((data) => QueryAllStoredMovieResponse.decode(new _m0.Reader(data)));
  }

  StoredReview(request: QueryGetStoredReviewRequest): Promise<QueryGetStoredReviewResponse> {
    const data = QueryGetStoredReviewRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "StoredReview", data);
    return promise.then((data) => QueryGetStoredReviewResponse.decode(new _m0.Reader(data)));
  }

  StoredReviewAll(request: QueryAllStoredReviewRequest): Promise<QueryAllStoredReviewResponse> {
    const data = QueryAllStoredReviewRequest.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Query", "StoredReviewAll", data);
    return promise.then((data) => QueryAllStoredReviewResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
