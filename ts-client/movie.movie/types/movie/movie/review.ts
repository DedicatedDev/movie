/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "movie.movie";

export interface Review {
  id: number;
  movieId: number;
  rating: number;
  description: string;
  creator: string;
}

function createBaseReview(): Review {
  return { id: 0, movieId: 0, rating: 0, description: "", creator: "" };
}

export const Review = {
  encode(message: Review, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
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
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Review {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReview();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
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
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Review {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      movieId: isSet(object.movieId) ? Number(object.movieId) : 0,
      rating: isSet(object.rating) ? Number(object.rating) : 0,
      description: isSet(object.description) ? String(object.description) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
    };
  },

  toJSON(message: Review): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.movieId !== undefined && (obj.movieId = Math.round(message.movieId));
    message.rating !== undefined && (obj.rating = Math.round(message.rating));
    message.description !== undefined && (obj.description = message.description);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Review>, I>>(object: I): Review {
    const message = createBaseReview();
    message.id = object.id ?? 0;
    message.movieId = object.movieId ?? 0;
    message.rating = object.rating ?? 0;
    message.description = object.description ?? "";
    message.creator = object.creator ?? "";
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
