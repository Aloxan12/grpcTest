import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"


export class NullableString extends jspb.Message {
  getNull(): google_protobuf_struct_pb.NullValue;
  setNull(value: google_protobuf_struct_pb.NullValue): NullableString;

  getData(): string;
  setData(value: string): NullableString;

  getKindCase(): NullableString.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableString.AsObject;
  static toObject(includeInstance: boolean, msg: NullableString): NullableString.AsObject;
  static serializeBinaryToWriter(message: NullableString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableString;
  static deserializeBinaryFromReader(message: NullableString, reader: jspb.BinaryReader): NullableString;
}

export namespace NullableString {
  export type AsObject = {
    pb_null: google_protobuf_struct_pb.NullValue,
    data: string,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    NULL = 1,
    DATA = 2,
  }
}

export class NullableUInt64 extends jspb.Message {
  getNull(): google_protobuf_struct_pb.NullValue;
  setNull(value: google_protobuf_struct_pb.NullValue): NullableUInt64;

  getData(): number;
  setData(value: number): NullableUInt64;

  getKindCase(): NullableUInt64.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableUInt64.AsObject;
  static toObject(includeInstance: boolean, msg: NullableUInt64): NullableUInt64.AsObject;
  static serializeBinaryToWriter(message: NullableUInt64, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableUInt64;
  static deserializeBinaryFromReader(message: NullableUInt64, reader: jspb.BinaryReader): NullableUInt64;
}

export namespace NullableUInt64 {
  export type AsObject = {
    pb_null: google_protobuf_struct_pb.NullValue,
    data: number,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    NULL = 1,
    DATA = 2,
  }
}

export class NullableBool extends jspb.Message {
  getNull(): google_protobuf_struct_pb.NullValue;
  setNull(value: google_protobuf_struct_pb.NullValue): NullableBool;

  getData(): boolean;
  setData(value: boolean): NullableBool;

  getKindCase(): NullableBool.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableBool.AsObject;
  static toObject(includeInstance: boolean, msg: NullableBool): NullableBool.AsObject;
  static serializeBinaryToWriter(message: NullableBool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableBool;
  static deserializeBinaryFromReader(message: NullableBool, reader: jspb.BinaryReader): NullableBool;
}

export namespace NullableBool {
  export type AsObject = {
    pb_null: google_protobuf_struct_pb.NullValue,
    data: boolean,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    NULL = 1,
    DATA = 2,
  }
}

export class DecimalValue extends jspb.Message {
  getScale(): number;
  setScale(value: number): DecimalValue;

  getPrecision(): number;
  setPrecision(value: number): DecimalValue;

  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): DecimalValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DecimalValue.AsObject;
  static toObject(includeInstance: boolean, msg: DecimalValue): DecimalValue.AsObject;
  static serializeBinaryToWriter(message: DecimalValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DecimalValue;
  static deserializeBinaryFromReader(message: DecimalValue, reader: jspb.BinaryReader): DecimalValue;
}

export namespace DecimalValue {
  export type AsObject = {
    scale: number,
    precision: number,
    value: Uint8Array | string,
  }
}

