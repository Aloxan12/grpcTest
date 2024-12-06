import * as jspb from 'google-protobuf'

import * as data_types_pb from './data_types_pb'; // proto import: "data_types.proto"


export class AuthRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AuthRequest;

  getPassword(): string;
  setPassword(value: string): AuthRequest;

  getUsertype(): data_types_pb.UserType;
  setUsertype(value: data_types_pb.UserType): AuthRequest;

  getLocale(): string;
  setLocale(value: string): AuthRequest;
  hasLocale(): boolean;
  clearLocale(): AuthRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthRequest): AuthRequest.AsObject;
  static serializeBinaryToWriter(message: AuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthRequest;
  static deserializeBinaryFromReader(message: AuthRequest, reader: jspb.BinaryReader): AuthRequest;
}

export namespace AuthRequest {
  export type AsObject = {
    username: string,
    password: string,
    usertype: data_types_pb.UserType,
    locale?: string,
  }

  export enum LocaleCase { 
    _LOCALE_NOT_SET = 0,
    LOCALE = 4,
  }
}

export class AuthorizedRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): AuthorizedRequest;

  getToken(): string;
  setToken(value: string): AuthorizedRequest;

  getUsertype(): data_types_pb.UserType;
  setUsertype(value: data_types_pb.UserType): AuthorizedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizedRequest): AuthorizedRequest.AsObject;
  static serializeBinaryToWriter(message: AuthorizedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizedRequest;
  static deserializeBinaryFromReader(message: AuthorizedRequest, reader: jspb.BinaryReader): AuthorizedRequest;
}

export namespace AuthorizedRequest {
  export type AsObject = {
    username: string,
    token: string,
    usertype: data_types_pb.UserType,
  }
}

export class AuthCheckResult extends jspb.Message {
  getAuthresulttype(): AuthResultType;
  setAuthresulttype(value: AuthResultType): AuthCheckResult;

  getPreparedatastatus(): PrepareDataStatus;
  setPreparedatastatus(value: PrepareDataStatus): AuthCheckResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthCheckResult.AsObject;
  static toObject(includeInstance: boolean, msg: AuthCheckResult): AuthCheckResult.AsObject;
  static serializeBinaryToWriter(message: AuthCheckResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthCheckResult;
  static deserializeBinaryFromReader(message: AuthCheckResult, reader: jspb.BinaryReader): AuthCheckResult;
}

export namespace AuthCheckResult {
  export type AsObject = {
    authresulttype: AuthResultType,
    preparedatastatus: PrepareDataStatus,
  }
}

export class AuthResult extends jspb.Message {
  getMessageresult(): string;
  setMessageresult(value: string): AuthResult;

  getToken(): string;
  setToken(value: string): AuthResult;

  getAuthresulttype(): AuthResultType;
  setAuthresulttype(value: AuthResultType): AuthResult;

  getUsertype(): data_types_pb.UserType;
  setUsertype(value: data_types_pb.UserType): AuthResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthResult.AsObject;
  static toObject(includeInstance: boolean, msg: AuthResult): AuthResult.AsObject;
  static serializeBinaryToWriter(message: AuthResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthResult;
  static deserializeBinaryFromReader(message: AuthResult, reader: jspb.BinaryReader): AuthResult;
}

export namespace AuthResult {
  export type AsObject = {
    messageresult: string,
    token: string,
    authresulttype: AuthResultType,
    usertype: data_types_pb.UserType,
  }
}

export class SessionInfo extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): SessionInfo;

  getUsertype(): data_types_pb.UserType;
  setUsertype(value: data_types_pb.UserType): SessionInfo;

  getVenueschemeurl(): string;
  setVenueschemeurl(value: string): SessionInfo;

  getBookleturl(): string;
  setBookleturl(value: string): SessionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
  static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionInfo;
  static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
  export type AsObject = {
    username: string,
    usertype: data_types_pb.UserType,
    venueschemeurl: string,
    bookleturl: string,
  }
}

export class PrepareInitialDataResult extends jspb.Message {
  getMessageresult(): string;
  setMessageresult(value: string): PrepareInitialDataResult;

  getResulttype(): PrepareInitialDataResult.ResultType;
  setResulttype(value: PrepareInitialDataResult.ResultType): PrepareInitialDataResult;

  getCompletedpercent(): number;
  setCompletedpercent(value: number): PrepareInitialDataResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PrepareInitialDataResult.AsObject;
  static toObject(includeInstance: boolean, msg: PrepareInitialDataResult): PrepareInitialDataResult.AsObject;
  static serializeBinaryToWriter(message: PrepareInitialDataResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PrepareInitialDataResult;
  static deserializeBinaryFromReader(message: PrepareInitialDataResult, reader: jspb.BinaryReader): PrepareInitialDataResult;
}

export namespace PrepareInitialDataResult {
  export type AsObject = {
    messageresult: string,
    resulttype: PrepareInitialDataResult.ResultType,
    completedpercent: number,
  }

  export enum ResultType { 
    STARTED = 0,
    PROCESSING = 1,
    COMPLETED = 2,
  }
}

export enum AuthResultType { 
  SUCCESS = 0,
  ERROR = 1,
}
export enum PrepareDataStatus { 
  NONE = 0,
  EXPIRED = 1,
  INPROGRESS = 2,
  EXISTS = 3,
}
