// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "struct.proto" (package "auth", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { NullValue } from "./google/protobuf/struct";
/**
 * @generated from protobuf message auth.NullableString
 */
export interface NullableString {
    /**
     * @generated from protobuf oneof: kind
     */
    kind: {
        oneofKind: "null";
        /**
         * @generated from protobuf field: google.protobuf.NullValue null = 1;
         */
        null: NullValue;
    } | {
        oneofKind: "data";
        /**
         * @generated from protobuf field: string data = 2;
         */
        data: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message auth.NullableUInt64
 */
export interface NullableUInt64 {
    /**
     * @generated from protobuf oneof: kind
     */
    kind: {
        oneofKind: "null";
        /**
         * @generated from protobuf field: google.protobuf.NullValue null = 1;
         */
        null: NullValue;
    } | {
        oneofKind: "data";
        /**
         * @generated from protobuf field: uint64 data = 2;
         */
        data: bigint;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message auth.NullableBool
 */
export interface NullableBool {
    /**
     * @generated from protobuf oneof: kind
     */
    kind: {
        oneofKind: "null";
        /**
         * @generated from protobuf field: google.protobuf.NullValue null = 1;
         */
        null: NullValue;
    } | {
        oneofKind: "data";
        /**
         * @generated from protobuf field: bool data = 2;
         */
        data: boolean;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message auth.DecimalValue
 */
export interface DecimalValue {
    /**
     * @generated from protobuf field: uint32 scale = 1;
     */
    scale: number;
    /**
     * @generated from protobuf field: uint32 precision = 2;
     */
    precision: number;
    /**
     * @generated from protobuf field: bytes value = 3;
     */
    value: Uint8Array;
}
// @generated message type with reflection information, may provide speed optimized methods
class NullableString$Type extends MessageType<NullableString> {
    constructor() {
        super("auth.NullableString", [
            { no: 1, name: "null", kind: "enum", oneof: "kind", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "data", kind: "scalar", oneof: "kind", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<NullableString>): NullableString {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.kind = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<NullableString>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NullableString): NullableString {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.NullValue null */ 1:
                    message.kind = {
                        oneofKind: "null",
                        null: reader.int32()
                    };
                    break;
                case /* string data */ 2:
                    message.kind = {
                        oneofKind: "data",
                        data: reader.string()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: NullableString, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.NullValue null = 1; */
        if (message.kind.oneofKind === "null")
            writer.tag(1, WireType.Varint).int32(message.kind.null);
        /* string data = 2; */
        if (message.kind.oneofKind === "data")
            writer.tag(2, WireType.LengthDelimited).string(message.kind.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.NullableString
 */
export const NullableString = new NullableString$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NullableUInt64$Type extends MessageType<NullableUInt64> {
    constructor() {
        super("auth.NullableUInt64", [
            { no: 1, name: "null", kind: "enum", oneof: "kind", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "data", kind: "scalar", oneof: "kind", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<NullableUInt64>): NullableUInt64 {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.kind = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<NullableUInt64>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NullableUInt64): NullableUInt64 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.NullValue null */ 1:
                    message.kind = {
                        oneofKind: "null",
                        null: reader.int32()
                    };
                    break;
                case /* uint64 data */ 2:
                    message.kind = {
                        oneofKind: "data",
                        data: reader.uint64().toBigInt()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: NullableUInt64, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.NullValue null = 1; */
        if (message.kind.oneofKind === "null")
            writer.tag(1, WireType.Varint).int32(message.kind.null);
        /* uint64 data = 2; */
        if (message.kind.oneofKind === "data")
            writer.tag(2, WireType.Varint).uint64(message.kind.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.NullableUInt64
 */
export const NullableUInt64 = new NullableUInt64$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NullableBool$Type extends MessageType<NullableBool> {
    constructor() {
        super("auth.NullableBool", [
            { no: 1, name: "null", kind: "enum", oneof: "kind", T: () => ["google.protobuf.NullValue", NullValue] },
            { no: 2, name: "data", kind: "scalar", oneof: "kind", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<NullableBool>): NullableBool {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.kind = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<NullableBool>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: NullableBool): NullableBool {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.NullValue null */ 1:
                    message.kind = {
                        oneofKind: "null",
                        null: reader.int32()
                    };
                    break;
                case /* bool data */ 2:
                    message.kind = {
                        oneofKind: "data",
                        data: reader.bool()
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: NullableBool, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.NullValue null = 1; */
        if (message.kind.oneofKind === "null")
            writer.tag(1, WireType.Varint).int32(message.kind.null);
        /* bool data = 2; */
        if (message.kind.oneofKind === "data")
            writer.tag(2, WireType.Varint).bool(message.kind.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.NullableBool
 */
export const NullableBool = new NullableBool$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DecimalValue$Type extends MessageType<DecimalValue> {
    constructor() {
        super("auth.DecimalValue", [
            { no: 1, name: "scale", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "precision", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<DecimalValue>): DecimalValue {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.scale = 0;
        message.precision = 0;
        message.value = new Uint8Array(0);
        if (value !== undefined)
            reflectionMergePartial<DecimalValue>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DecimalValue): DecimalValue {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 scale */ 1:
                    message.scale = reader.uint32();
                    break;
                case /* uint32 precision */ 2:
                    message.precision = reader.uint32();
                    break;
                case /* bytes value */ 3:
                    message.value = reader.bytes();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DecimalValue, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 scale = 1; */
        if (message.scale !== 0)
            writer.tag(1, WireType.Varint).uint32(message.scale);
        /* uint32 precision = 2; */
        if (message.precision !== 0)
            writer.tag(2, WireType.Varint).uint32(message.precision);
        /* bytes value = 3; */
        if (message.value.length)
            writer.tag(3, WireType.LengthDelimited).bytes(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.DecimalValue
 */
export const DecimalValue = new DecimalValue$Type();