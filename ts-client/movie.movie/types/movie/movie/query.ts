/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Movie } from "./movie";
import { Params } from "./params";
import { Review } from "./review";

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
