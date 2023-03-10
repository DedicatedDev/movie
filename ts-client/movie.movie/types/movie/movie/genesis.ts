/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Movie } from "./movie";
import { Params } from "./params";
import { Review } from "./review";
import { StoredMovie } from "./stored_movie";
import { StoredReview } from "./stored_review";

export const protobufPackage = "movie.movie";

/** GenesisState defines the movie module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  movieList: Movie[];
  movieCount: number;
  reviewList: Review[];
  reviewCount: number;
  storedMovieList: StoredMovie[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  storedReviewList: StoredReview[];
}

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    movieList: [],
    movieCount: 0,
    reviewList: [],
    reviewCount: 0,
    storedMovieList: [],
    storedReviewList: [],
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.movieList) {
      Movie.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.movieCount !== 0) {
      writer.uint32(24).uint64(message.movieCount);
    }
    for (const v of message.reviewList) {
      Review.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.reviewCount !== 0) {
      writer.uint32(40).uint64(message.reviewCount);
    }
    for (const v of message.storedMovieList) {
      StoredMovie.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.storedReviewList) {
      StoredReview.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.movieList.push(Movie.decode(reader, reader.uint32()));
          break;
        case 3:
          message.movieCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.reviewList.push(Review.decode(reader, reader.uint32()));
          break;
        case 5:
          message.reviewCount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.storedMovieList.push(StoredMovie.decode(reader, reader.uint32()));
          break;
        case 7:
          message.storedReviewList.push(StoredReview.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      movieList: Array.isArray(object?.movieList) ? object.movieList.map((e: any) => Movie.fromJSON(e)) : [],
      movieCount: isSet(object.movieCount) ? Number(object.movieCount) : 0,
      reviewList: Array.isArray(object?.reviewList) ? object.reviewList.map((e: any) => Review.fromJSON(e)) : [],
      reviewCount: isSet(object.reviewCount) ? Number(object.reviewCount) : 0,
      storedMovieList: Array.isArray(object?.storedMovieList)
        ? object.storedMovieList.map((e: any) => StoredMovie.fromJSON(e))
        : [],
      storedReviewList: Array.isArray(object?.storedReviewList)
        ? object.storedReviewList.map((e: any) => StoredReview.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.movieList) {
      obj.movieList = message.movieList.map((e) => e ? Movie.toJSON(e) : undefined);
    } else {
      obj.movieList = [];
    }
    message.movieCount !== undefined && (obj.movieCount = Math.round(message.movieCount));
    if (message.reviewList) {
      obj.reviewList = message.reviewList.map((e) => e ? Review.toJSON(e) : undefined);
    } else {
      obj.reviewList = [];
    }
    message.reviewCount !== undefined && (obj.reviewCount = Math.round(message.reviewCount));
    if (message.storedMovieList) {
      obj.storedMovieList = message.storedMovieList.map((e) => e ? StoredMovie.toJSON(e) : undefined);
    } else {
      obj.storedMovieList = [];
    }
    if (message.storedReviewList) {
      obj.storedReviewList = message.storedReviewList.map((e) => e ? StoredReview.toJSON(e) : undefined);
    } else {
      obj.storedReviewList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.movieList = object.movieList?.map((e) => Movie.fromPartial(e)) || [];
    message.movieCount = object.movieCount ?? 0;
    message.reviewList = object.reviewList?.map((e) => Review.fromPartial(e)) || [];
    message.reviewCount = object.reviewCount ?? 0;
    message.storedMovieList = object.storedMovieList?.map((e) => StoredMovie.fromPartial(e)) || [];
    message.storedReviewList = object.storedReviewList?.map((e) => StoredReview.fromPartial(e)) || [];
    return message;
  },
};

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
