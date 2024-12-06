// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "auth_requests.proto" (package "auth", syntax proto3)
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
import { UserType } from "./data_types";
// General auth requests

/**
 * @generated from protobuf message auth.AuthRequest
 */
export interface AuthRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
    /**
     * @generated from protobuf field: auth.UserType userType = 3;
     */
    userType: UserType;
    /**
     * @generated from protobuf field: optional string locale = 4;
     */
    locale?: string; // possible values: ru-RU, en-US
}
/**
 * @generated from protobuf message auth.AuthorizedRequest
 */
export interface AuthorizedRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string token = 2;
     */
    token: string;
    /**
     * @generated from protobuf field: auth.UserType userType = 3;
     */
    userType: UserType;
}
/**
 * @generated from protobuf message auth.AuthCheckResult
 */
export interface AuthCheckResult {
    /**
     * @generated from protobuf field: auth.AuthResultType authResultType = 1;
     */
    authResultType: AuthResultType;
    /**
     * @generated from protobuf field: auth.PrepareDataStatus PrepareDataStatus = 2 [json_name = "PrepareDataStatus"];
     */
    prepareDataStatus: PrepareDataStatus;
}
/**
 * @generated from protobuf message auth.AuthResult
 */
export interface AuthResult {
    /**
     * @generated from protobuf field: string messageResult = 1;
     */
    messageResult: string;
    /**
     * @generated from protobuf field: string token = 2;
     */
    token: string;
    /**
     * @generated from protobuf field: auth.AuthResultType authResultType = 3;
     */
    authResultType: AuthResultType;
    /**
     * @generated from protobuf field: auth.UserType userType = 4;
     */
    userType: UserType;
}
/**
 * @generated from protobuf message auth.SessionInfo
 */
export interface SessionInfo {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: auth.UserType userType = 2;
     */
    userType: UserType;
    /**
     * @generated from protobuf field: string venueSchemeUrl = 3;
     */
    venueSchemeUrl: string;
    /**
     * @generated from protobuf field: string bookletUrl = 4;
     */
    bookletUrl: string;
}
//  Messages for prepare inital data

/**
 * @generated from protobuf message auth.PrepareInitialDataResult
 */
export interface PrepareInitialDataResult {
    /**
     * @generated from protobuf field: string messageResult = 1;
     */
    messageResult: string;
    /**
     * @generated from protobuf field: auth.PrepareInitialDataResult.ResultType resultType = 2;
     */
    resultType: PrepareInitialDataResult_ResultType;
    /**
     * @generated from protobuf field: uint32 completedPercent = 3;
     */
    completedPercent: number;
}
/**
 * @generated from protobuf enum auth.PrepareInitialDataResult.ResultType
 */
export enum PrepareInitialDataResult_ResultType {
    /**
     * @generated from protobuf enum value: started = 0;
     */
    started = 0,
    /**
     * @generated from protobuf enum value: processing = 1;
     */
    processing = 1,
    /**
     * @generated from protobuf enum value: completed = 2;
     */
    completed = 2
}
// Enums

/**
 * @generated from protobuf enum auth.AuthResultType
 */
export enum AuthResultType {
    /**
     * @generated from protobuf enum value: success = 0;
     */
    success = 0,
    /**
     * @generated from protobuf enum value: error = 1;
     */
    error = 1
}
/**
 * @generated from protobuf enum auth.PrepareDataStatus
 */
export enum PrepareDataStatus {
    /**
     * @generated from protobuf enum value: none = 0;
     */
    none = 0,
    /**
     * @generated from protobuf enum value: expired = 1;
     */
    expired = 1,
    /**
     * @generated from protobuf enum value: inProgress = 2;
     */
    inProgress = 2,
    /**
     * @generated from protobuf enum value: exists = 3;
     */
    exists = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class AuthRequest$Type extends MessageType<AuthRequest> {
    constructor() {
        super("auth.AuthRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "userType", kind: "enum", T: () => ["auth.UserType", UserType] },
            { no: 4, name: "locale", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<AuthRequest>): AuthRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        message.password = "";
        message.userType = 0;
        if (value !== undefined)
            reflectionMergePartial<AuthRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthRequest): AuthRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                case /* auth.UserType userType */ 3:
                    message.userType = reader.int32();
                    break;
                case /* optional string locale */ 4:
                    message.locale = reader.string();
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
    internalBinaryWrite(message: AuthRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.password);
        /* auth.UserType userType = 3; */
        if (message.userType !== 0)
            writer.tag(3, WireType.Varint).int32(message.userType);
        /* optional string locale = 4; */
        if (message.locale !== undefined)
            writer.tag(4, WireType.LengthDelimited).string(message.locale);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.AuthRequest
 */
export const AuthRequest = new AuthRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthorizedRequest$Type extends MessageType<AuthorizedRequest> {
    constructor() {
        super("auth.AuthorizedRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "userType", kind: "enum", T: () => ["auth.UserType", UserType] }
        ]);
    }
    create(value?: PartialMessage<AuthorizedRequest>): AuthorizedRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        message.token = "";
        message.userType = 0;
        if (value !== undefined)
            reflectionMergePartial<AuthorizedRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthorizedRequest): AuthorizedRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string token */ 2:
                    message.token = reader.string();
                    break;
                case /* auth.UserType userType */ 3:
                    message.userType = reader.int32();
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
    internalBinaryWrite(message: AuthorizedRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* string token = 2; */
        if (message.token !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.token);
        /* auth.UserType userType = 3; */
        if (message.userType !== 0)
            writer.tag(3, WireType.Varint).int32(message.userType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.AuthorizedRequest
 */
export const AuthorizedRequest = new AuthorizedRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthCheckResult$Type extends MessageType<AuthCheckResult> {
    constructor() {
        super("auth.AuthCheckResult", [
            { no: 1, name: "authResultType", kind: "enum", T: () => ["auth.AuthResultType", AuthResultType] },
            { no: 2, name: "PrepareDataStatus", kind: "enum", jsonName: "PrepareDataStatus", T: () => ["auth.PrepareDataStatus", PrepareDataStatus] }
        ]);
    }
    create(value?: PartialMessage<AuthCheckResult>): AuthCheckResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.authResultType = 0;
        message.prepareDataStatus = 0;
        if (value !== undefined)
            reflectionMergePartial<AuthCheckResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthCheckResult): AuthCheckResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* auth.AuthResultType authResultType */ 1:
                    message.authResultType = reader.int32();
                    break;
                case /* auth.PrepareDataStatus PrepareDataStatus = 2 [json_name = "PrepareDataStatus"];*/ 2:
                    message.prepareDataStatus = reader.int32();
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
    internalBinaryWrite(message: AuthCheckResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* auth.AuthResultType authResultType = 1; */
        if (message.authResultType !== 0)
            writer.tag(1, WireType.Varint).int32(message.authResultType);
        /* auth.PrepareDataStatus PrepareDataStatus = 2 [json_name = "PrepareDataStatus"]; */
        if (message.prepareDataStatus !== 0)
            writer.tag(2, WireType.Varint).int32(message.prepareDataStatus);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.AuthCheckResult
 */
export const AuthCheckResult = new AuthCheckResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AuthResult$Type extends MessageType<AuthResult> {
    constructor() {
        super("auth.AuthResult", [
            { no: 1, name: "messageResult", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "authResultType", kind: "enum", T: () => ["auth.AuthResultType", AuthResultType] },
            { no: 4, name: "userType", kind: "enum", T: () => ["auth.UserType", UserType] }
        ]);
    }
    create(value?: PartialMessage<AuthResult>): AuthResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.messageResult = "";
        message.token = "";
        message.authResultType = 0;
        message.userType = 0;
        if (value !== undefined)
            reflectionMergePartial<AuthResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AuthResult): AuthResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string messageResult */ 1:
                    message.messageResult = reader.string();
                    break;
                case /* string token */ 2:
                    message.token = reader.string();
                    break;
                case /* auth.AuthResultType authResultType */ 3:
                    message.authResultType = reader.int32();
                    break;
                case /* auth.UserType userType */ 4:
                    message.userType = reader.int32();
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
    internalBinaryWrite(message: AuthResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string messageResult = 1; */
        if (message.messageResult !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.messageResult);
        /* string token = 2; */
        if (message.token !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.token);
        /* auth.AuthResultType authResultType = 3; */
        if (message.authResultType !== 0)
            writer.tag(3, WireType.Varint).int32(message.authResultType);
        /* auth.UserType userType = 4; */
        if (message.userType !== 0)
            writer.tag(4, WireType.Varint).int32(message.userType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.AuthResult
 */
export const AuthResult = new AuthResult$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SessionInfo$Type extends MessageType<SessionInfo> {
    constructor() {
        super("auth.SessionInfo", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "userType", kind: "enum", T: () => ["auth.UserType", UserType] },
            { no: 3, name: "venueSchemeUrl", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "bookletUrl", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<SessionInfo>): SessionInfo {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.username = "";
        message.userType = 0;
        message.venueSchemeUrl = "";
        message.bookletUrl = "";
        if (value !== undefined)
            reflectionMergePartial<SessionInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SessionInfo): SessionInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* auth.UserType userType */ 2:
                    message.userType = reader.int32();
                    break;
                case /* string venueSchemeUrl */ 3:
                    message.venueSchemeUrl = reader.string();
                    break;
                case /* string bookletUrl */ 4:
                    message.bookletUrl = reader.string();
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
    internalBinaryWrite(message: SessionInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.username);
        /* auth.UserType userType = 2; */
        if (message.userType !== 0)
            writer.tag(2, WireType.Varint).int32(message.userType);
        /* string venueSchemeUrl = 3; */
        if (message.venueSchemeUrl !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.venueSchemeUrl);
        /* string bookletUrl = 4; */
        if (message.bookletUrl !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.bookletUrl);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.SessionInfo
 */
export const SessionInfo = new SessionInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrepareInitialDataResult$Type extends MessageType<PrepareInitialDataResult> {
    constructor() {
        super("auth.PrepareInitialDataResult", [
            { no: 1, name: "messageResult", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "resultType", kind: "enum", T: () => ["auth.PrepareInitialDataResult.ResultType", PrepareInitialDataResult_ResultType] },
            { no: 3, name: "completedPercent", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<PrepareInitialDataResult>): PrepareInitialDataResult {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.messageResult = "";
        message.resultType = 0;
        message.completedPercent = 0;
        if (value !== undefined)
            reflectionMergePartial<PrepareInitialDataResult>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PrepareInitialDataResult): PrepareInitialDataResult {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string messageResult */ 1:
                    message.messageResult = reader.string();
                    break;
                case /* auth.PrepareInitialDataResult.ResultType resultType */ 2:
                    message.resultType = reader.int32();
                    break;
                case /* uint32 completedPercent */ 3:
                    message.completedPercent = reader.uint32();
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
    internalBinaryWrite(message: PrepareInitialDataResult, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string messageResult = 1; */
        if (message.messageResult !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.messageResult);
        /* auth.PrepareInitialDataResult.ResultType resultType = 2; */
        if (message.resultType !== 0)
            writer.tag(2, WireType.Varint).int32(message.resultType);
        /* uint32 completedPercent = 3; */
        if (message.completedPercent !== 0)
            writer.tag(3, WireType.Varint).uint32(message.completedPercent);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message auth.PrepareInitialDataResult
 */
export const PrepareInitialDataResult = new PrepareInitialDataResult$Type();