import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb'; // proto import: "google/protobuf/struct.proto"
import * as data_types_pb from './data_types_pb'; // proto import: "data_types.proto"
import * as auth_requests_pb from './auth_requests_pb'; // proto import: "auth_requests.proto"
import * as struct_pb from './struct_pb'; // proto import: "struct.proto"


export class AddCountryRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): AddCountryRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): AddCountryRequest;

  getCountryname(): string;
  setCountryname(value: string): AddCountryRequest;

  getCurrencycode(): string;
  setCurrencycode(value: string): AddCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCountryRequest): AddCountryRequest.AsObject;
  static serializeBinaryToWriter(message: AddCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCountryRequest;
  static deserializeBinaryFromReader(message: AddCountryRequest, reader: jspb.BinaryReader): AddCountryRequest;
}

export namespace AddCountryRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    countryname: string,
    currencycode: string,
  }
}

export class SaveCountryRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): SaveCountryRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): SaveCountryRequest;

  getCountry(): data_types_pb.Country | undefined;
  setCountry(value?: data_types_pb.Country): SaveCountryRequest;
  hasCountry(): boolean;
  clearCountry(): SaveCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveCountryRequest): SaveCountryRequest.AsObject;
  static serializeBinaryToWriter(message: SaveCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveCountryRequest;
  static deserializeBinaryFromReader(message: SaveCountryRequest, reader: jspb.BinaryReader): SaveCountryRequest;
}

export namespace SaveCountryRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    country?: data_types_pb.Country.AsObject,
  }
}

export class DeleteCountryRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): DeleteCountryRequest;
  hasAuth(): boolean;
  clearAuth(): DeleteCountryRequest;

  getId(): number;
  setId(value: number): DeleteCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCountryRequest): DeleteCountryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCountryRequest;
  static deserializeBinaryFromReader(message: DeleteCountryRequest, reader: jspb.BinaryReader): DeleteCountryRequest;
}

export namespace DeleteCountryRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    id: number,
  }
}

export class GetCityByCountryRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetCityByCountryRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetCityByCountryRequest;

  getCountryid(): number;
  setCountryid(value: number): GetCityByCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCityByCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCityByCountryRequest): GetCityByCountryRequest.AsObject;
  static serializeBinaryToWriter(message: GetCityByCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCityByCountryRequest;
  static deserializeBinaryFromReader(message: GetCityByCountryRequest, reader: jspb.BinaryReader): GetCityByCountryRequest;
}

export namespace GetCityByCountryRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    countryid: number,
  }
}

export class AddCityRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): AddCityRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): AddCityRequest;

  getCountryid(): number;
  setCountryid(value: number): AddCityRequest;

  getCityname(): string;
  setCityname(value: string): AddCityRequest;

  getZoneid(): string;
  setZoneid(value: string): AddCityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddCityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddCityRequest): AddCityRequest.AsObject;
  static serializeBinaryToWriter(message: AddCityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddCityRequest;
  static deserializeBinaryFromReader(message: AddCityRequest, reader: jspb.BinaryReader): AddCityRequest;
}

export namespace AddCityRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    countryid: number,
    cityname: string,
    zoneid: string,
  }
}

export class SaveCityRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): SaveCityRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): SaveCityRequest;

  getCity(): data_types_pb.City | undefined;
  setCity(value?: data_types_pb.City): SaveCityRequest;
  hasCity(): boolean;
  clearCity(): SaveCityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveCityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveCityRequest): SaveCityRequest.AsObject;
  static serializeBinaryToWriter(message: SaveCityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveCityRequest;
  static deserializeBinaryFromReader(message: SaveCityRequest, reader: jspb.BinaryReader): SaveCityRequest;
}

export namespace SaveCityRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    city?: data_types_pb.City.AsObject,
  }
}

export class DeleteCityRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): DeleteCityRequest;
  hasAuth(): boolean;
  clearAuth(): DeleteCityRequest;

  getId(): number;
  setId(value: number): DeleteCityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCityRequest): DeleteCityRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCityRequest;
  static deserializeBinaryFromReader(message: DeleteCityRequest, reader: jspb.BinaryReader): DeleteCityRequest;
}

export namespace DeleteCityRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    id: number,
  }
}

export class GetVenueByCityRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetVenueByCityRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetVenueByCityRequest;

  getCityid(): number;
  setCityid(value: number): GetVenueByCityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVenueByCityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVenueByCityRequest): GetVenueByCityRequest.AsObject;
  static serializeBinaryToWriter(message: GetVenueByCityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVenueByCityRequest;
  static deserializeBinaryFromReader(message: GetVenueByCityRequest, reader: jspb.BinaryReader): GetVenueByCityRequest;
}

export namespace GetVenueByCityRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    cityid: number,
  }
}

export class GetVenueFilteredRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetVenueFilteredRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetVenueFilteredRequest;

  getCityid(): struct_pb.NullableUInt64 | undefined;
  setCityid(value?: struct_pb.NullableUInt64): GetVenueFilteredRequest;
  hasCityid(): boolean;
  clearCityid(): GetVenueFilteredRequest;

  getName(): struct_pb.NullableString | undefined;
  setName(value?: struct_pb.NullableString): GetVenueFilteredRequest;
  hasName(): boolean;
  clearName(): GetVenueFilteredRequest;

  getOrder(): VenuesOrder;
  setOrder(value: VenuesOrder): GetVenueFilteredRequest;

  getLimit(): number;
  setLimit(value: number): GetVenueFilteredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVenueFilteredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVenueFilteredRequest): GetVenueFilteredRequest.AsObject;
  static serializeBinaryToWriter(message: GetVenueFilteredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVenueFilteredRequest;
  static deserializeBinaryFromReader(message: GetVenueFilteredRequest, reader: jspb.BinaryReader): GetVenueFilteredRequest;
}

export namespace GetVenueFilteredRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    cityid?: struct_pb.NullableUInt64.AsObject,
    name?: struct_pb.NullableString.AsObject,
    order: VenuesOrder,
    limit: number,
  }
}

export class GetVenueByIdRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetVenueByIdRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetVenueByIdRequest;

  getVenueid(): number;
  setVenueid(value: number): GetVenueByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVenueByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVenueByIdRequest): GetVenueByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetVenueByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVenueByIdRequest;
  static deserializeBinaryFromReader(message: GetVenueByIdRequest, reader: jspb.BinaryReader): GetVenueByIdRequest;
}

export namespace GetVenueByIdRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    venueid: number,
  }
}

export class DeleteVenueRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): DeleteVenueRequest;
  hasAuth(): boolean;
  clearAuth(): DeleteVenueRequest;

  getId(): number;
  setId(value: number): DeleteVenueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVenueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVenueRequest): DeleteVenueRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVenueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVenueRequest;
  static deserializeBinaryFromReader(message: DeleteVenueRequest, reader: jspb.BinaryReader): DeleteVenueRequest;
}

export namespace DeleteVenueRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    id: number,
  }
}

export class AddPlan1Request extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): AddPlan1Request;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): AddPlan1Request;

  getVenueid(): number;
  setVenueid(value: number): AddPlan1Request;

  getPlanname(): string;
  setPlanname(value: string): AddPlan1Request;

  getCategoriesList(): Array<data_types_pb.Category>;
  setCategoriesList(value: Array<data_types_pb.Category>): AddPlan1Request;
  clearCategoriesList(): AddPlan1Request;
  addCategories(value?: data_types_pb.Category, index?: number): data_types_pb.Category;

  getCategorylimitsList(): Array<data_types_pb.CategoryLimit>;
  setCategorylimitsList(value: Array<data_types_pb.CategoryLimit>): AddPlan1Request;
  clearCategorylimitsList(): AddPlan1Request;
  addCategorylimits(value?: data_types_pb.CategoryLimit, index?: number): data_types_pb.CategoryLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPlan1Request.AsObject;
  static toObject(includeInstance: boolean, msg: AddPlan1Request): AddPlan1Request.AsObject;
  static serializeBinaryToWriter(message: AddPlan1Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPlan1Request;
  static deserializeBinaryFromReader(message: AddPlan1Request, reader: jspb.BinaryReader): AddPlan1Request;
}

export namespace AddPlan1Request {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    venueid: number,
    planname: string,
    categoriesList: Array<data_types_pb.Category.AsObject>,
    categorylimitsList: Array<data_types_pb.CategoryLimit.AsObject>,
  }
}

export class AddPlan3Request extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): AddPlan3Request;
  hasAuth(): boolean;
  clearAuth(): AddPlan3Request;

  getVenueid(): number;
  setVenueid(value: number): AddPlan3Request;

  getPlanname(): string;
  setPlanname(value: string): AddPlan3Request;

  getCategoriesList(): Array<data_types_pb.Category>;
  setCategoriesList(value: Array<data_types_pb.Category>): AddPlan3Request;
  clearCategoriesList(): AddPlan3Request;
  addCategories(value?: data_types_pb.Category, index?: number): data_types_pb.Category;

  getCategorylimitsList(): Array<data_types_pb.CategoryLimit>;
  setCategorylimitsList(value: Array<data_types_pb.CategoryLimit>): AddPlan3Request;
  clearCategorylimitsList(): AddPlan3Request;
  addCategorylimits(value?: data_types_pb.CategoryLimit, index?: number): data_types_pb.CategoryLimit;

  getSvgfiledata(): string;
  setSvgfiledata(value: string): AddPlan3Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPlan3Request.AsObject;
  static toObject(includeInstance: boolean, msg: AddPlan3Request): AddPlan3Request.AsObject;
  static serializeBinaryToWriter(message: AddPlan3Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPlan3Request;
  static deserializeBinaryFromReader(message: AddPlan3Request, reader: jspb.BinaryReader): AddPlan3Request;
}

export namespace AddPlan3Request {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    venueid: number,
    planname: string,
    categoriesList: Array<data_types_pb.Category.AsObject>,
    categorylimitsList: Array<data_types_pb.CategoryLimit.AsObject>,
    svgfiledata: string,
  }
}

export class CheckPlanRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): CheckPlanRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): CheckPlanRequest;

  getSvgfiledata(): string;
  setSvgfiledata(value: string): CheckPlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPlanRequest): CheckPlanRequest.AsObject;
  static serializeBinaryToWriter(message: CheckPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPlanRequest;
  static deserializeBinaryFromReader(message: CheckPlanRequest, reader: jspb.BinaryReader): CheckPlanRequest;
}

export namespace CheckPlanRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    svgfiledata: string,
  }
}

export class CheckPlanResponse extends jspb.Message {
  getResponsetextdata(): string;
  setResponsetextdata(value: string): CheckPlanResponse;

  getOptimizedsvgdata(): string;
  setOptimizedsvgdata(value: string): CheckPlanResponse;

  getSeatdatalistList(): Array<data_types_pb.SeatData>;
  setSeatdatalistList(value: Array<data_types_pb.SeatData>): CheckPlanResponse;
  clearSeatdatalistList(): CheckPlanResponse;
  addSeatdatalist(value?: data_types_pb.SeatData, index?: number): data_types_pb.SeatData;

  getCategoriesList(): Array<data_types_pb.Category>;
  setCategoriesList(value: Array<data_types_pb.Category>): CheckPlanResponse;
  clearCategoriesList(): CheckPlanResponse;
  addCategories(value?: data_types_pb.Category, index?: number): data_types_pb.Category;

  getNotrecognizedseatsList(): Array<data_types_pb.SeatData>;
  setNotrecognizedseatsList(value: Array<data_types_pb.SeatData>): CheckPlanResponse;
  clearNotrecognizedseatsList(): CheckPlanResponse;
  addNotrecognizedseats(value?: data_types_pb.SeatData, index?: number): data_types_pb.SeatData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPlanResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPlanResponse): CheckPlanResponse.AsObject;
  static serializeBinaryToWriter(message: CheckPlanResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPlanResponse;
  static deserializeBinaryFromReader(message: CheckPlanResponse, reader: jspb.BinaryReader): CheckPlanResponse;
}

export namespace CheckPlanResponse {
  export type AsObject = {
    responsetextdata: string,
    optimizedsvgdata: string,
    seatdatalistList: Array<data_types_pb.SeatData.AsObject>,
    categoriesList: Array<data_types_pb.Category.AsObject>,
    notrecognizedseatsList: Array<data_types_pb.SeatData.AsObject>,
  }
}

export class AddPlan2Request extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): AddPlan2Request;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): AddPlan2Request;

  getVenueid(): number;
  setVenueid(value: number): AddPlan2Request;

  getPlanname(): string;
  setPlanname(value: string): AddPlan2Request;

  getSvgfiledata(): string;
  setSvgfiledata(value: string): AddPlan2Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPlan2Request.AsObject;
  static toObject(includeInstance: boolean, msg: AddPlan2Request): AddPlan2Request.AsObject;
  static serializeBinaryToWriter(message: AddPlan2Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPlan2Request;
  static deserializeBinaryFromReader(message: AddPlan2Request, reader: jspb.BinaryReader): AddPlan2Request;
}

export namespace AddPlan2Request {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    venueid: number,
    planname: string,
    svgfiledata: string,
  }
}

export class SavePlanRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): SavePlanRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): SavePlanRequest;

  getSeatingplan(): data_types_pb.SeatingPlan | undefined;
  setSeatingplan(value?: data_types_pb.SeatingPlan): SavePlanRequest;
  hasSeatingplan(): boolean;
  clearSeatingplan(): SavePlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SavePlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SavePlanRequest): SavePlanRequest.AsObject;
  static serializeBinaryToWriter(message: SavePlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SavePlanRequest;
  static deserializeBinaryFromReader(message: SavePlanRequest, reader: jspb.BinaryReader): SavePlanRequest;
}

export namespace SavePlanRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    seatingplan?: data_types_pb.SeatingPlan.AsObject,
  }
}

export class GetActionFilteredRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetActionFilteredRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetActionFilteredRequest;

  getActual(): struct_pb.NullableBool | undefined;
  setActual(value?: struct_pb.NullableBool): GetActionFilteredRequest;
  hasActual(): boolean;
  clearActual(): GetActionFilteredRequest;

  getWithoutactioneventdata(): struct_pb.NullableBool | undefined;
  setWithoutactioneventdata(value?: struct_pb.NullableBool): GetActionFilteredRequest;
  hasWithoutactioneventdata(): boolean;
  clearWithoutactioneventdata(): GetActionFilteredRequest;

  getCityid(): struct_pb.NullableUInt64 | undefined;
  setCityid(value?: struct_pb.NullableUInt64): GetActionFilteredRequest;
  hasCityid(): boolean;
  clearCityid(): GetActionFilteredRequest;

  getVenueid(): struct_pb.NullableUInt64 | undefined;
  setVenueid(value?: struct_pb.NullableUInt64): GetActionFilteredRequest;
  hasVenueid(): boolean;
  clearVenueid(): GetActionFilteredRequest;

  getName(): struct_pb.NullableString | undefined;
  setName(value?: struct_pb.NullableString): GetActionFilteredRequest;
  hasName(): boolean;
  clearName(): GetActionFilteredRequest;

  getKindid(): struct_pb.NullableString | undefined;
  setKindid(value?: struct_pb.NullableString): GetActionFilteredRequest;
  hasKindid(): boolean;
  clearKindid(): GetActionFilteredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionFilteredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionFilteredRequest): GetActionFilteredRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionFilteredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionFilteredRequest;
  static deserializeBinaryFromReader(message: GetActionFilteredRequest, reader: jspb.BinaryReader): GetActionFilteredRequest;
}

export namespace GetActionFilteredRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    actual?: struct_pb.NullableBool.AsObject,
    withoutactioneventdata?: struct_pb.NullableBool.AsObject,
    cityid?: struct_pb.NullableUInt64.AsObject,
    venueid?: struct_pb.NullableUInt64.AsObject,
    name?: struct_pb.NullableString.AsObject,
    kindid?: struct_pb.NullableString.AsObject,
  }
}

export class GetActionByIdRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetActionByIdRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetActionByIdRequest;

  getActionid(): number;
  setActionid(value: number): GetActionByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionByIdRequest): GetActionByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionByIdRequest;
  static deserializeBinaryFromReader(message: GetActionByIdRequest, reader: jspb.BinaryReader): GetActionByIdRequest;
}

export namespace GetActionByIdRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    actionid: number,
  }
}

export class DeleteActionRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): DeleteActionRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): DeleteActionRequest;

  getActionid(): number;
  setActionid(value: number): DeleteActionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteActionRequest): DeleteActionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteActionRequest;
  static deserializeBinaryFromReader(message: DeleteActionRequest, reader: jspb.BinaryReader): DeleteActionRequest;
}

export namespace DeleteActionRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    actionid: number,
  }
}

export class AddActionRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): AddActionRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): AddActionRequest;

  getCompanyorganizerid(): number;
  setCompanyorganizerid(value: number): AddActionRequest;

  getKind(): data_types_pb.Kind | undefined;
  setKind(value?: data_types_pb.Kind): AddActionRequest;
  hasKind(): boolean;
  clearKind(): AddActionRequest;

  getActionname(): string;
  setActionname(value: string): AddActionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddActionRequest): AddActionRequest.AsObject;
  static serializeBinaryToWriter(message: AddActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddActionRequest;
  static deserializeBinaryFromReader(message: AddActionRequest, reader: jspb.BinaryReader): AddActionRequest;
}

export namespace AddActionRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    companyorganizerid: number,
    kind?: data_types_pb.Kind.AsObject,
    actionname: string,
  }
}

export class SaveActionRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): SaveActionRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): SaveActionRequest;

  getData(): data_types_pb.Action | undefined;
  setData(value?: data_types_pb.Action): SaveActionRequest;
  hasData(): boolean;
  clearData(): SaveActionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveActionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveActionRequest): SaveActionRequest.AsObject;
  static serializeBinaryToWriter(message: SaveActionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveActionRequest;
  static deserializeBinaryFromReader(message: SaveActionRequest, reader: jspb.BinaryReader): SaveActionRequest;
}

export namespace SaveActionRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    data?: data_types_pb.Action.AsObject,
  }
}

export class GetActionEventFilteredRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetActionEventFilteredRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetActionEventFilteredRequest;

  getActionid(): number;
  setActionid(value: number): GetActionEventFilteredRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetActionEventFilteredRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetActionEventFilteredRequest): GetActionEventFilteredRequest.AsObject;
  static serializeBinaryToWriter(message: GetActionEventFilteredRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetActionEventFilteredRequest;
  static deserializeBinaryFromReader(message: GetActionEventFilteredRequest, reader: jspb.BinaryReader): GetActionEventFilteredRequest;
}

export namespace GetActionEventFilteredRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    actionid: number,
  }
}

export class AddActionEventRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): AddActionEventRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): AddActionEventRequest;

  getDataList(): Array<data_types_pb.ActionEvent>;
  setDataList(value: Array<data_types_pb.ActionEvent>): AddActionEventRequest;
  clearDataList(): AddActionEventRequest;
  addData(value?: data_types_pb.ActionEvent, index?: number): data_types_pb.ActionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddActionEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddActionEventRequest): AddActionEventRequest.AsObject;
  static serializeBinaryToWriter(message: AddActionEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddActionEventRequest;
  static deserializeBinaryFromReader(message: AddActionEventRequest, reader: jspb.BinaryReader): AddActionEventRequest;
}

export namespace AddActionEventRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    dataList: Array<data_types_pb.ActionEvent.AsObject>,
  }
}

export class SaveActionEventRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): SaveActionEventRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): SaveActionEventRequest;

  getData(): data_types_pb.ActionEvent | undefined;
  setData(value?: data_types_pb.ActionEvent): SaveActionEventRequest;
  hasData(): boolean;
  clearData(): SaveActionEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveActionEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveActionEventRequest): SaveActionEventRequest.AsObject;
  static serializeBinaryToWriter(message: SaveActionEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveActionEventRequest;
  static deserializeBinaryFromReader(message: SaveActionEventRequest, reader: jspb.BinaryReader): SaveActionEventRequest;
}

export namespace SaveActionEventRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    data?: data_types_pb.ActionEvent.AsObject,
  }
}

export class DeleteActionEventRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): DeleteActionEventRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): DeleteActionEventRequest;

  getId(): number;
  setId(value: number): DeleteActionEventRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteActionEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteActionEventRequest): DeleteActionEventRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteActionEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteActionEventRequest;
  static deserializeBinaryFromReader(message: DeleteActionEventRequest, reader: jspb.BinaryReader): DeleteActionEventRequest;
}

export namespace DeleteActionEventRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    id: number,
  }
}

export class GetGatewayEventListRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetGatewayEventListRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetGatewayEventListRequest;

  getData(): number;
  setData(value: number): GetGatewayEventListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayEventListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayEventListRequest): GetGatewayEventListRequest.AsObject;
  static serializeBinaryToWriter(message: GetGatewayEventListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayEventListRequest;
  static deserializeBinaryFromReader(message: GetGatewayEventListRequest, reader: jspb.BinaryReader): GetGatewayEventListRequest;
}

export namespace GetGatewayEventListRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    data: number,
  }
}

export class GetSeatingPlanByIdRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetSeatingPlanByIdRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetSeatingPlanByIdRequest;

  getSeatingplanid(): number;
  setSeatingplanid(value: number): GetSeatingPlanByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatingPlanByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatingPlanByIdRequest): GetSeatingPlanByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetSeatingPlanByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatingPlanByIdRequest;
  static deserializeBinaryFromReader(message: GetSeatingPlanByIdRequest, reader: jspb.BinaryReader): GetSeatingPlanByIdRequest;
}

export namespace GetSeatingPlanByIdRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    seatingplanid: number,
  }
}

export class GetSeatingPlanListRequest extends jspb.Message {
  getAuthorizedrequest(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuthorizedrequest(value?: auth_requests_pb.AuthorizedRequest): GetSeatingPlanListRequest;
  hasAuthorizedrequest(): boolean;
  clearAuthorizedrequest(): GetSeatingPlanListRequest;

  getVenueid(): struct_pb.NullableUInt64 | undefined;
  setVenueid(value?: struct_pb.NullableUInt64): GetSeatingPlanListRequest;
  hasVenueid(): boolean;
  clearVenueid(): GetSeatingPlanListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatingPlanListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatingPlanListRequest): GetSeatingPlanListRequest.AsObject;
  static serializeBinaryToWriter(message: GetSeatingPlanListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatingPlanListRequest;
  static deserializeBinaryFromReader(message: GetSeatingPlanListRequest, reader: jspb.BinaryReader): GetSeatingPlanListRequest;
}

export namespace GetSeatingPlanListRequest {
  export type AsObject = {
    authorizedrequest?: auth_requests_pb.AuthorizedRequest.AsObject,
    venueid?: struct_pb.NullableUInt64.AsObject,
  }
}

export class DeleteSeatingPlanRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): DeleteSeatingPlanRequest;
  hasAuth(): boolean;
  clearAuth(): DeleteSeatingPlanRequest;

  getId(): number;
  setId(value: number): DeleteSeatingPlanRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSeatingPlanRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSeatingPlanRequest): DeleteSeatingPlanRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSeatingPlanRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSeatingPlanRequest;
  static deserializeBinaryFromReader(message: DeleteSeatingPlanRequest, reader: jspb.BinaryReader): DeleteSeatingPlanRequest;
}

export namespace DeleteSeatingPlanRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    id: number,
  }
}

export class AddVenueRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): AddVenueRequest;
  hasAuth(): boolean;
  clearAuth(): AddVenueRequest;

  getCityid(): number;
  setCityid(value: number): AddVenueRequest;

  getName(): string;
  setName(value: string): AddVenueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVenueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddVenueRequest): AddVenueRequest.AsObject;
  static serializeBinaryToWriter(message: AddVenueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVenueRequest;
  static deserializeBinaryFromReader(message: AddVenueRequest, reader: jspb.BinaryReader): AddVenueRequest;
}

export namespace AddVenueRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    cityid: number,
    name: string,
  }
}

export class AddVenueResponse extends jspb.Message {
  getVenue(): data_types_pb.Venue | undefined;
  setVenue(value?: data_types_pb.Venue): AddVenueResponse;
  hasVenue(): boolean;
  clearVenue(): AddVenueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddVenueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddVenueResponse): AddVenueResponse.AsObject;
  static serializeBinaryToWriter(message: AddVenueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddVenueResponse;
  static deserializeBinaryFromReader(message: AddVenueResponse, reader: jspb.BinaryReader): AddVenueResponse;
}

export namespace AddVenueResponse {
  export type AsObject = {
    venue?: data_types_pb.Venue.AsObject,
  }
}

export class NullableImage extends jspb.Message {
  getNull(): google_protobuf_struct_pb.NullValue;
  setNull(value: google_protobuf_struct_pb.NullValue): NullableImage;

  getImage(): data_types_pb.Image | undefined;
  setImage(value?: data_types_pb.Image): NullableImage;
  hasImage(): boolean;
  clearImage(): NullableImage;

  getKindCase(): NullableImage.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullableImage.AsObject;
  static toObject(includeInstance: boolean, msg: NullableImage): NullableImage.AsObject;
  static serializeBinaryToWriter(message: NullableImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullableImage;
  static deserializeBinaryFromReader(message: NullableImage, reader: jspb.BinaryReader): NullableImage;
}

export namespace NullableImage {
  export type AsObject = {
    pb_null: google_protobuf_struct_pb.NullValue,
    image?: data_types_pb.Image.AsObject,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    NULL = 1,
    IMAGE = 2,
  }
}

export class SaveVenueRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): SaveVenueRequest;
  hasAuth(): boolean;
  clearAuth(): SaveVenueRequest;

  getSimplevenue(): data_types_pb.SimpleVenue | undefined;
  setSimplevenue(value?: data_types_pb.SimpleVenue): SaveVenueRequest;
  hasSimplevenue(): boolean;
  clearSimplevenue(): SaveVenueRequest;

  getBigimage(): data_types_pb.Image | undefined;
  setBigimage(value?: data_types_pb.Image): SaveVenueRequest;
  hasBigimage(): boolean;
  clearBigimage(): SaveVenueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveVenueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SaveVenueRequest): SaveVenueRequest.AsObject;
  static serializeBinaryToWriter(message: SaveVenueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveVenueRequest;
  static deserializeBinaryFromReader(message: SaveVenueRequest, reader: jspb.BinaryReader): SaveVenueRequest;
}

export namespace SaveVenueRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    simplevenue?: data_types_pb.SimpleVenue.AsObject,
    bigimage?: data_types_pb.Image.AsObject,
  }
}

export class SaveVenueResponse extends jspb.Message {
  getVenue(): data_types_pb.Venue | undefined;
  setVenue(value?: data_types_pb.Venue): SaveVenueResponse;
  hasVenue(): boolean;
  clearVenue(): SaveVenueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SaveVenueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SaveVenueResponse): SaveVenueResponse.AsObject;
  static serializeBinaryToWriter(message: SaveVenueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SaveVenueResponse;
  static deserializeBinaryFromReader(message: SaveVenueResponse, reader: jspb.BinaryReader): SaveVenueResponse;
}

export namespace SaveVenueResponse {
  export type AsObject = {
    venue?: data_types_pb.Venue.AsObject,
  }
}

export class ActionEventSyncRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): ActionEventSyncRequest;
  hasAuth(): boolean;
  clearAuth(): ActionEventSyncRequest;

  getId(): number;
  setId(value: number): ActionEventSyncRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEventSyncRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEventSyncRequest): ActionEventSyncRequest.AsObject;
  static serializeBinaryToWriter(message: ActionEventSyncRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEventSyncRequest;
  static deserializeBinaryFromReader(message: ActionEventSyncRequest, reader: jspb.BinaryReader): ActionEventSyncRequest;
}

export namespace ActionEventSyncRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    id: number,
  }
}

export class ActionEventSyncResponse extends jspb.Message {
  getActioneventdata(): data_types_pb.ActionEventData | undefined;
  setActioneventdata(value?: data_types_pb.ActionEventData): ActionEventSyncResponse;
  hasActioneventdata(): boolean;
  clearActioneventdata(): ActionEventSyncResponse;

  getPricechanged(): boolean;
  setPricechanged(value: boolean): ActionEventSyncResponse;

  getReport(): string;
  setReport(value: string): ActionEventSyncResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEventSyncResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEventSyncResponse): ActionEventSyncResponse.AsObject;
  static serializeBinaryToWriter(message: ActionEventSyncResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEventSyncResponse;
  static deserializeBinaryFromReader(message: ActionEventSyncResponse, reader: jspb.BinaryReader): ActionEventSyncResponse;
}

export namespace ActionEventSyncResponse {
  export type AsObject = {
    actioneventdata?: data_types_pb.ActionEventData.AsObject,
    pricechanged: boolean,
    report: string,
  }
}

export class GetSyncReportRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): GetSyncReportRequest;
  hasAuth(): boolean;
  clearAuth(): GetSyncReportRequest;

  getActionid(): number;
  setActionid(value: number): GetSyncReportRequest;

  getPlanid(): number;
  setPlanid(value: number): GetSyncReportRequest;

  getGatewayevent(): data_types_pb.GatewayEvent | undefined;
  setGatewayevent(value?: data_types_pb.GatewayEvent): GetSyncReportRequest;
  hasGatewayevent(): boolean;
  clearGatewayevent(): GetSyncReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncReportRequest): GetSyncReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetSyncReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncReportRequest;
  static deserializeBinaryFromReader(message: GetSyncReportRequest, reader: jspb.BinaryReader): GetSyncReportRequest;
}

export namespace GetSyncReportRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    actionid: number,
    planid: number,
    gatewayevent?: data_types_pb.GatewayEvent.AsObject,
  }
}

export class GetSyncReportResponse extends jspb.Message {
  getId(): number;
  setId(value: number): GetSyncReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSyncReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSyncReportResponse): GetSyncReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetSyncReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSyncReportResponse;
  static deserializeBinaryFromReader(message: GetSyncReportResponse, reader: jspb.BinaryReader): GetSyncReportResponse;
}

export namespace GetSyncReportResponse {
  export type AsObject = {
    id: number,
  }
}

export class GetGatewayEventInfoRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): GetGatewayEventInfoRequest;
  hasAuth(): boolean;
  clearAuth(): GetGatewayEventInfoRequest;

  getGatewayevent(): data_types_pb.GatewayEvent | undefined;
  setGatewayevent(value?: data_types_pb.GatewayEvent): GetGatewayEventInfoRequest;
  hasGatewayevent(): boolean;
  clearGatewayevent(): GetGatewayEventInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayEventInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayEventInfoRequest): GetGatewayEventInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetGatewayEventInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayEventInfoRequest;
  static deserializeBinaryFromReader(message: GetGatewayEventInfoRequest, reader: jspb.BinaryReader): GetGatewayEventInfoRequest;
}

export namespace GetGatewayEventInfoRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    gatewayevent?: data_types_pb.GatewayEvent.AsObject,
  }
}

export class GetGatewayEventInfoResponse extends jspb.Message {
  getReport(): string;
  setReport(value: string): GetGatewayEventInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetGatewayEventInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetGatewayEventInfoResponse): GetGatewayEventInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetGatewayEventInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetGatewayEventInfoResponse;
  static deserializeBinaryFromReader(message: GetGatewayEventInfoResponse, reader: jspb.BinaryReader): GetGatewayEventInfoResponse;
}

export namespace GetGatewayEventInfoResponse {
  export type AsObject = {
    report: string,
  }
}

export class SetActionBookletRequest extends jspb.Message {
  getAuth(): auth_requests_pb.AuthorizedRequest | undefined;
  setAuth(value?: auth_requests_pb.AuthorizedRequest): SetActionBookletRequest;
  hasAuth(): boolean;
  clearAuth(): SetActionBookletRequest;

  getActionid(): number;
  setActionid(value: number): SetActionBookletRequest;

  getType(): data_types_pb.BookletType | undefined;
  setType(value?: data_types_pb.BookletType): SetActionBookletRequest;
  hasType(): boolean;
  clearType(): SetActionBookletRequest;

  getData(): string;
  setData(value: string): SetActionBookletRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActionBookletRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetActionBookletRequest): SetActionBookletRequest.AsObject;
  static serializeBinaryToWriter(message: SetActionBookletRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActionBookletRequest;
  static deserializeBinaryFromReader(message: SetActionBookletRequest, reader: jspb.BinaryReader): SetActionBookletRequest;
}

export namespace SetActionBookletRequest {
  export type AsObject = {
    auth?: auth_requests_pb.AuthorizedRequest.AsObject,
    actionid: number,
    type?: data_types_pb.BookletType.AsObject,
    data: string,
  }
}

export class SetActionBookletResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SetActionBookletResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetActionBookletResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetActionBookletResponse): SetActionBookletResponse.AsObject;
  static serializeBinaryToWriter(message: SetActionBookletResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetActionBookletResponse;
  static deserializeBinaryFromReader(message: SetActionBookletResponse, reader: jspb.BinaryReader): SetActionBookletResponse;
}

export namespace SetActionBookletResponse {
  export type AsObject = {
    success: boolean,
  }
}

export enum VenuesOrder { 
  NAMEASC = 0,
  NAMEDESC = 1,
  SIZEASC = 2,
  SIZEDESC = 3,
}
