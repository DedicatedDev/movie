/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "movie.movie";

export interface StoredMovie {
  title: string;
  movieId: number;
}

function createBaseStoredMovie(): StoredMovie {
  return { title: "", movieId: 0 };
}

export const StoredMovie = {
  encode(message: StoredMovie, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.movieId !== 0) {
      writer.uint32(16).uint64(message.movieId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StoredMovie {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStoredMovie();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.movieId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StoredMovie {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      movieId: isSet(object.movieId) ? Number(object.movieId) : 0,
    };
  },

  toJSON(message: StoredMovie): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.movieId !== undefined && (obj.movieId = Math.round(message.movieId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StoredMovie>, I>>(object: I): StoredMovie {
    const message = createBaseStoredMovie();
    message.title = object.title ?? "";
    message.movieId = object.movieId ?? 0;
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
