/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "movie.movie";

export interface MsgCreateMovie {
  creator: string;
  title: string;
  description: string;
  year: number;
}

export interface MsgCreateMovieResponse {
  id: number;
}

export interface MsgUpdateMovie {
  creator: string;
  id: number;
  title: string;
  description: string;
  year: number;
}

export interface MsgUpdateMovieResponse {
}

export interface MsgDeleteMovie {
  creator: string;
  id: number;
}

export interface MsgDeleteMovieResponse {
}

export interface MsgCreateReview {
  creator: string;
  movieId: number;
  rating: number;
  description: string;
}

export interface MsgCreateReviewResponse {
  id: number;
}

export interface MsgUpdateReview {
  creator: string;
  id: number;
  movieId: number;
  rating: number;
  description: string;
}

export interface MsgUpdateReviewResponse {
}

export interface MsgDeleteReview {
  creator: string;
  id: number;
}

export interface MsgDeleteReviewResponse {
}

function createBaseMsgCreateMovie(): MsgCreateMovie {
  return { creator: "", title: "", description: "", year: 0 };
}

export const MsgCreateMovie = {
  encode(message: MsgCreateMovie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.year !== 0) {
      writer.uint32(32).uint64(message.year);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMovie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMovie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.year = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMovie {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      year: isSet(object.year) ? Number(object.year) : 0,
    };
  },

  toJSON(message: MsgCreateMovie): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.year !== undefined && (obj.year = Math.round(message.year));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateMovie>, I>>(object: I): MsgCreateMovie {
    const message = createBaseMsgCreateMovie();
    message.creator = object.creator ?? "";
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.year = object.year ?? 0;
    return message;
  },
};

function createBaseMsgCreateMovieResponse(): MsgCreateMovieResponse {
  return { id: 0 };
}

export const MsgCreateMovieResponse = {
  encode(message: MsgCreateMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateMovieResponse();
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

  fromJSON(object: any): MsgCreateMovieResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateMovieResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateMovieResponse>, I>>(object: I): MsgCreateMovieResponse {
    const message = createBaseMsgCreateMovieResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateMovie(): MsgUpdateMovie {
  return { creator: "", id: 0, title: "", description: "", year: 0 };
}

export const MsgUpdateMovie = {
  encode(message: MsgUpdateMovie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.year !== 0) {
      writer.uint32(40).uint64(message.year);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMovie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMovie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.year = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMovie {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      year: isSet(object.year) ? Number(object.year) : 0,
    };
  },

  toJSON(message: MsgUpdateMovie): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined && (obj.description = message.description);
    message.year !== undefined && (obj.year = Math.round(message.year));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMovie>, I>>(object: I): MsgUpdateMovie {
    const message = createBaseMsgUpdateMovie();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.year = object.year ?? 0;
    return message;
  },
};

function createBaseMsgUpdateMovieResponse(): MsgUpdateMovieResponse {
  return {};
}

export const MsgUpdateMovieResponse = {
  encode(_: MsgUpdateMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMovieResponse();
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

  fromJSON(_: any): MsgUpdateMovieResponse {
    return {};
  },

  toJSON(_: MsgUpdateMovieResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMovieResponse>, I>>(_: I): MsgUpdateMovieResponse {
    const message = createBaseMsgUpdateMovieResponse();
    return message;
  },
};

function createBaseMsgDeleteMovie(): MsgDeleteMovie {
  return { creator: "", id: 0 };
}

export const MsgDeleteMovie = {
  encode(message: MsgDeleteMovie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMovie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMovie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMovie {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteMovie): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteMovie>, I>>(object: I): MsgDeleteMovie {
    const message = createBaseMsgDeleteMovie();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteMovieResponse(): MsgDeleteMovieResponse {
  return {};
}

export const MsgDeleteMovieResponse = {
  encode(_: MsgDeleteMovieResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteMovieResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteMovieResponse();
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

  fromJSON(_: any): MsgDeleteMovieResponse {
    return {};
  },

  toJSON(_: MsgDeleteMovieResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteMovieResponse>, I>>(_: I): MsgDeleteMovieResponse {
    const message = createBaseMsgDeleteMovieResponse();
    return message;
  },
};

function createBaseMsgCreateReview(): MsgCreateReview {
  return { creator: "", movieId: 0, rating: 0, description: "" };
}

export const MsgCreateReview = {
  encode(message: MsgCreateReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.movieId !== 0) {
      writer.uint32(16).uint64(message.movieId);
    }
    if (message.rating !== 0) {
      writer.uint32(24).uint64(message.rating);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateReview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.movieId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.rating = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateReview {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      movieId: isSet(object.movieId) ? Number(object.movieId) : 0,
      rating: isSet(object.rating) ? Number(object.rating) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: MsgCreateReview): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.movieId !== undefined && (obj.movieId = Math.round(message.movieId));
    message.rating !== undefined && (obj.rating = Math.round(message.rating));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateReview>, I>>(object: I): MsgCreateReview {
    const message = createBaseMsgCreateReview();
    message.creator = object.creator ?? "";
    message.movieId = object.movieId ?? 0;
    message.rating = object.rating ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgCreateReviewResponse(): MsgCreateReviewResponse {
  return { id: 0 };
}

export const MsgCreateReviewResponse = {
  encode(message: MsgCreateReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateReviewResponse();
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

  fromJSON(object: any): MsgCreateReviewResponse {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgCreateReviewResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateReviewResponse>, I>>(object: I): MsgCreateReviewResponse {
    const message = createBaseMsgCreateReviewResponse();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgUpdateReview(): MsgUpdateReview {
  return { creator: "", id: 0, movieId: 0, rating: 0, description: "" };
}

export const MsgUpdateReview = {
  encode(message: MsgUpdateReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.movieId !== 0) {
      writer.uint32(24).uint64(message.movieId);
    }
    if (message.rating !== 0) {
      writer.uint32(32).uint64(message.rating);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.movieId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.rating = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateReview {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      movieId: isSet(object.movieId) ? Number(object.movieId) : 0,
      rating: isSet(object.rating) ? Number(object.rating) : 0,
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: MsgUpdateReview): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.movieId !== undefined && (obj.movieId = Math.round(message.movieId));
    message.rating !== undefined && (obj.rating = Math.round(message.rating));
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateReview>, I>>(object: I): MsgUpdateReview {
    const message = createBaseMsgUpdateReview();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    message.movieId = object.movieId ?? 0;
    message.rating = object.rating ?? 0;
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateReviewResponse(): MsgUpdateReviewResponse {
  return {};
}

export const MsgUpdateReviewResponse = {
  encode(_: MsgUpdateReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReviewResponse();
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

  fromJSON(_: any): MsgUpdateReviewResponse {
    return {};
  },

  toJSON(_: MsgUpdateReviewResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateReviewResponse>, I>>(_: I): MsgUpdateReviewResponse {
    const message = createBaseMsgUpdateReviewResponse();
    return message;
  },
};

function createBaseMsgDeleteReview(): MsgDeleteReview {
  return { creator: "", id: 0 };
}

export const MsgDeleteReview = {
  encode(message: MsgDeleteReview, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteReview {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteReview {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: MsgDeleteReview): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteReview>, I>>(object: I): MsgDeleteReview {
    const message = createBaseMsgDeleteReview();
    message.creator = object.creator ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeleteReviewResponse(): MsgDeleteReviewResponse {
  return {};
}

export const MsgDeleteReviewResponse = {
  encode(_: MsgDeleteReviewResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteReviewResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteReviewResponse();
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

  fromJSON(_: any): MsgDeleteReviewResponse {
    return {};
  },

  toJSON(_: MsgDeleteReviewResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeleteReviewResponse>, I>>(_: I): MsgDeleteReviewResponse {
    const message = createBaseMsgDeleteReviewResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMovie(request: MsgCreateMovie): Promise<MsgCreateMovieResponse>;
  UpdateMovie(request: MsgUpdateMovie): Promise<MsgUpdateMovieResponse>;
  DeleteMovie(request: MsgDeleteMovie): Promise<MsgDeleteMovieResponse>;
  CreateReview(request: MsgCreateReview): Promise<MsgCreateReviewResponse>;
  UpdateReview(request: MsgUpdateReview): Promise<MsgUpdateReviewResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteReview(request: MsgDeleteReview): Promise<MsgDeleteReviewResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateMovie = this.CreateMovie.bind(this);
    this.UpdateMovie = this.UpdateMovie.bind(this);
    this.DeleteMovie = this.DeleteMovie.bind(this);
    this.CreateReview = this.CreateReview.bind(this);
    this.UpdateReview = this.UpdateReview.bind(this);
    this.DeleteReview = this.DeleteReview.bind(this);
  }
  CreateMovie(request: MsgCreateMovie): Promise<MsgCreateMovieResponse> {
    const data = MsgCreateMovie.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "CreateMovie", data);
    return promise.then((data) => MsgCreateMovieResponse.decode(new _m0.Reader(data)));
  }

  UpdateMovie(request: MsgUpdateMovie): Promise<MsgUpdateMovieResponse> {
    const data = MsgUpdateMovie.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "UpdateMovie", data);
    return promise.then((data) => MsgUpdateMovieResponse.decode(new _m0.Reader(data)));
  }

  DeleteMovie(request: MsgDeleteMovie): Promise<MsgDeleteMovieResponse> {
    const data = MsgDeleteMovie.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "DeleteMovie", data);
    return promise.then((data) => MsgDeleteMovieResponse.decode(new _m0.Reader(data)));
  }

  CreateReview(request: MsgCreateReview): Promise<MsgCreateReviewResponse> {
    const data = MsgCreateReview.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "CreateReview", data);
    return promise.then((data) => MsgCreateReviewResponse.decode(new _m0.Reader(data)));
  }

  UpdateReview(request: MsgUpdateReview): Promise<MsgUpdateReviewResponse> {
    const data = MsgUpdateReview.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "UpdateReview", data);
    return promise.then((data) => MsgUpdateReviewResponse.decode(new _m0.Reader(data)));
  }

  DeleteReview(request: MsgDeleteReview): Promise<MsgDeleteReviewResponse> {
    const data = MsgDeleteReview.encode(request).finish();
    const promise = this.rpc.request("movie.movie.Msg", "DeleteReview", data);
    return promise.then((data) => MsgDeleteReviewResponse.decode(new _m0.Reader(data)));
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
