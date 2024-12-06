import * as jspb from 'google-protobuf'

import * as struct_pb from './struct_pb'; // proto import: "struct.proto"


export class LoginUser extends jspb.Message {
  getId(): number;
  setId(value: number): LoginUser;

  getAuthorityid(): number;
  setAuthorityid(value: number): LoginUser;

  getEmail(): string;
  setEmail(value: string): LoginUser;

  getName(): string;
  setName(value: string): LoginUser;

  getSurname(): string;
  setSurname(value: string): LoginUser;

  getAuthorityname(): string;
  setAuthorityname(value: string): LoginUser;

  getUsertype(): UserType;
  setUsertype(value: UserType): LoginUser;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUser.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUser): LoginUser.AsObject;
  static serializeBinaryToWriter(message: LoginUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUser;
  static deserializeBinaryFromReader(message: LoginUser, reader: jspb.BinaryReader): LoginUser;
}

export namespace LoginUser {
  export type AsObject = {
    id: number,
    authorityid: number,
    email: string,
    name: string,
    surname: string,
    authorityname: string,
    usertype: UserType,
  }
}

export class KindList extends jspb.Message {
  getKindlistList(): Array<Kind>;
  setKindlistList(value: Array<Kind>): KindList;
  clearKindlistList(): KindList;
  addKindlist(value?: Kind, index?: number): Kind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KindList.AsObject;
  static toObject(includeInstance: boolean, msg: KindList): KindList.AsObject;
  static serializeBinaryToWriter(message: KindList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KindList;
  static deserializeBinaryFromReader(message: KindList, reader: jspb.BinaryReader): KindList;
}

export namespace KindList {
  export type AsObject = {
    kindlistList: Array<Kind.AsObject>,
  }
}

export class Kind extends jspb.Message {
  getId(): number;
  setId(value: number): Kind;

  getName(): string;
  setName(value: string): Kind;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Kind.AsObject;
  static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
  static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Kind;
  static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
}

export namespace Kind {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class VenueTypeList extends jspb.Message {
  getVenuetypeList(): Array<VenueType>;
  setVenuetypeList(value: Array<VenueType>): VenueTypeList;
  clearVenuetypeList(): VenueTypeList;
  addVenuetype(value?: VenueType, index?: number): VenueType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VenueTypeList.AsObject;
  static toObject(includeInstance: boolean, msg: VenueTypeList): VenueTypeList.AsObject;
  static serializeBinaryToWriter(message: VenueTypeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VenueTypeList;
  static deserializeBinaryFromReader(message: VenueTypeList, reader: jspb.BinaryReader): VenueTypeList;
}

export namespace VenueTypeList {
  export type AsObject = {
    venuetypeList: Array<VenueType.AsObject>,
  }
}

export class VenueType extends jspb.Message {
  getId(): number;
  setId(value: number): VenueType;

  getName(): string;
  setName(value: string): VenueType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VenueType.AsObject;
  static toObject(includeInstance: boolean, msg: VenueType): VenueType.AsObject;
  static serializeBinaryToWriter(message: VenueType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VenueType;
  static deserializeBinaryFromReader(message: VenueType, reader: jspb.BinaryReader): VenueType;
}

export namespace VenueType {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class GatewayList extends jspb.Message {
  getGatewaylistList(): Array<Gateway>;
  setGatewaylistList(value: Array<Gateway>): GatewayList;
  clearGatewaylistList(): GatewayList;
  addGatewaylist(value?: Gateway, index?: number): Gateway;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayList.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayList): GatewayList.AsObject;
  static serializeBinaryToWriter(message: GatewayList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayList;
  static deserializeBinaryFromReader(message: GatewayList, reader: jspb.BinaryReader): GatewayList;
}

export namespace GatewayList {
  export type AsObject = {
    gatewaylistList: Array<Gateway.AsObject>,
  }
}

export class Gateway extends jspb.Message {
  getId(): number;
  setId(value: number): Gateway;

  getSystemid(): number;
  setSystemid(value: number): Gateway;

  getName(): string;
  setName(value: string): Gateway;

  getSystemname(): string;
  setSystemname(value: string): Gateway;

  getOrganizerid(): number;
  setOrganizerid(value: number): Gateway;
  hasOrganizerid(): boolean;
  clearOrganizerid(): Gateway;

  getOrganizername(): string;
  setOrganizername(value: string): Gateway;
  hasOrganizername(): boolean;
  clearOrganizername(): Gateway;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Gateway.AsObject;
  static toObject(includeInstance: boolean, msg: Gateway): Gateway.AsObject;
  static serializeBinaryToWriter(message: Gateway, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Gateway;
  static deserializeBinaryFromReader(message: Gateway, reader: jspb.BinaryReader): Gateway;
}

export namespace Gateway {
  export type AsObject = {
    id: number,
    systemid: number,
    name: string,
    systemname: string,
    organizerid?: number,
    organizername?: string,
  }

  export enum OrganizeridCase { 
    _ORGANIZERID_NOT_SET = 0,
    ORGANIZERID = 5,
  }

  export enum OrganizernameCase { 
    _ORGANIZERNAME_NOT_SET = 0,
    ORGANIZERNAME = 6,
  }
}

export class BarcodeFormatList extends jspb.Message {
  getBarcodeformatList(): Array<BarcodeFormat>;
  setBarcodeformatList(value: Array<BarcodeFormat>): BarcodeFormatList;
  clearBarcodeformatList(): BarcodeFormatList;
  addBarcodeformat(value?: BarcodeFormat, index?: number): BarcodeFormat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BarcodeFormatList.AsObject;
  static toObject(includeInstance: boolean, msg: BarcodeFormatList): BarcodeFormatList.AsObject;
  static serializeBinaryToWriter(message: BarcodeFormatList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BarcodeFormatList;
  static deserializeBinaryFromReader(message: BarcodeFormatList, reader: jspb.BinaryReader): BarcodeFormatList;
}

export namespace BarcodeFormatList {
  export type AsObject = {
    barcodeformatList: Array<BarcodeFormat.AsObject>,
  }
}

export class BarcodeFormat extends jspb.Message {
  getId(): number;
  setId(value: number): BarcodeFormat;

  getName(): string;
  setName(value: string): BarcodeFormat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BarcodeFormat.AsObject;
  static toObject(includeInstance: boolean, msg: BarcodeFormat): BarcodeFormat.AsObject;
  static serializeBinaryToWriter(message: BarcodeFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BarcodeFormat;
  static deserializeBinaryFromReader(message: BarcodeFormat, reader: jspb.BinaryReader): BarcodeFormat;
}

export namespace BarcodeFormat {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class QuotaFormatList extends jspb.Message {
  getQuotaformatList(): Array<QuotaFormat>;
  setQuotaformatList(value: Array<QuotaFormat>): QuotaFormatList;
  clearQuotaformatList(): QuotaFormatList;
  addQuotaformat(value?: QuotaFormat, index?: number): QuotaFormat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaFormatList.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaFormatList): QuotaFormatList.AsObject;
  static serializeBinaryToWriter(message: QuotaFormatList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaFormatList;
  static deserializeBinaryFromReader(message: QuotaFormatList, reader: jspb.BinaryReader): QuotaFormatList;
}

export namespace QuotaFormatList {
  export type AsObject = {
    quotaformatList: Array<QuotaFormat.AsObject>,
  }
}

export class QuotaFormat extends jspb.Message {
  getId(): number;
  setId(value: number): QuotaFormat;

  getDesc(): string;
  setDesc(value: string): QuotaFormat;

  getFilefilterdesc(): string;
  setFilefilterdesc(value: string): QuotaFormat;

  getFilefilterextensionsList(): Array<string>;
  setFilefilterextensionsList(value: Array<string>): QuotaFormat;
  clearFilefilterextensionsList(): QuotaFormat;
  addFilefilterextensions(value: string, index?: number): QuotaFormat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuotaFormat.AsObject;
  static toObject(includeInstance: boolean, msg: QuotaFormat): QuotaFormat.AsObject;
  static serializeBinaryToWriter(message: QuotaFormat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuotaFormat;
  static deserializeBinaryFromReader(message: QuotaFormat, reader: jspb.BinaryReader): QuotaFormat;
}

export namespace QuotaFormat {
  export type AsObject = {
    id: number,
    desc: string,
    filefilterdesc: string,
    filefilterextensionsList: Array<string>,
  }
}

export class BookletTypeList extends jspb.Message {
  getBooklettypelistList(): Array<BookletType>;
  setBooklettypelistList(value: Array<BookletType>): BookletTypeList;
  clearBooklettypelistList(): BookletTypeList;
  addBooklettypelist(value?: BookletType, index?: number): BookletType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookletTypeList.AsObject;
  static toObject(includeInstance: boolean, msg: BookletTypeList): BookletTypeList.AsObject;
  static serializeBinaryToWriter(message: BookletTypeList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookletTypeList;
  static deserializeBinaryFromReader(message: BookletTypeList, reader: jspb.BinaryReader): BookletTypeList;
}

export namespace BookletTypeList {
  export type AsObject = {
    booklettypelistList: Array<BookletType.AsObject>,
  }
}

export class BookletType extends jspb.Message {
  getId(): number;
  setId(value: number): BookletType;

  getDesc(): string;
  setDesc(value: string): BookletType;

  getFilefilterdesc(): string;
  setFilefilterdesc(value: string): BookletType;

  getExtension(): string;
  setExtension(value: string): BookletType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BookletType.AsObject;
  static toObject(includeInstance: boolean, msg: BookletType): BookletType.AsObject;
  static serializeBinaryToWriter(message: BookletType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BookletType;
  static deserializeBinaryFromReader(message: BookletType, reader: jspb.BinaryReader): BookletType;
}

export namespace BookletType {
  export type AsObject = {
    id: number,
    desc: string,
    filefilterdesc: string,
    extension: string,
  }
}

export class GenreList extends jspb.Message {
  getGenreList(): Array<Genre>;
  setGenreList(value: Array<Genre>): GenreList;
  clearGenreList(): GenreList;
  addGenre(value?: Genre, index?: number): Genre;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenreList.AsObject;
  static toObject(includeInstance: boolean, msg: GenreList): GenreList.AsObject;
  static serializeBinaryToWriter(message: GenreList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenreList;
  static deserializeBinaryFromReader(message: GenreList, reader: jspb.BinaryReader): GenreList;
}

export namespace GenreList {
  export type AsObject = {
    genreList: Array<Genre.AsObject>,
  }
}

export class Genre extends jspb.Message {
  getId(): number;
  setId(value: number): Genre;

  getName(): string;
  setName(value: string): Genre;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Genre.AsObject;
  static toObject(includeInstance: boolean, msg: Genre): Genre.AsObject;
  static serializeBinaryToWriter(message: Genre, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Genre;
  static deserializeBinaryFromReader(message: Genre, reader: jspb.BinaryReader): Genre;
}

export namespace Genre {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class ZoneIdList extends jspb.Message {
  getZoneidList(): Array<ZoneId>;
  setZoneidList(value: Array<ZoneId>): ZoneIdList;
  clearZoneidList(): ZoneIdList;
  addZoneid(value?: ZoneId, index?: number): ZoneId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneIdList.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneIdList): ZoneIdList.AsObject;
  static serializeBinaryToWriter(message: ZoneIdList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneIdList;
  static deserializeBinaryFromReader(message: ZoneIdList, reader: jspb.BinaryReader): ZoneIdList;
}

export namespace ZoneIdList {
  export type AsObject = {
    zoneidList: Array<ZoneId.AsObject>,
  }
}

export class ZoneId extends jspb.Message {
  getId(): string;
  setId(value: string): ZoneId;

  getStandardoffsetstring(): string;
  setStandardoffsetstring(value: string): ZoneId;

  getStandardoffsetseconds(): number;
  setStandardoffsetseconds(value: number): ZoneId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ZoneId.AsObject;
  static toObject(includeInstance: boolean, msg: ZoneId): ZoneId.AsObject;
  static serializeBinaryToWriter(message: ZoneId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ZoneId;
  static deserializeBinaryFromReader(message: ZoneId, reader: jspb.BinaryReader): ZoneId;
}

export namespace ZoneId {
  export type AsObject = {
    id: string,
    standardoffsetstring: string,
    standardoffsetseconds: number,
  }
}

export class CurrencyList extends jspb.Message {
  getCurrencyList(): Array<Currency>;
  setCurrencyList(value: Array<Currency>): CurrencyList;
  clearCurrencyList(): CurrencyList;
  addCurrency(value?: Currency, index?: number): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyList.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyList): CurrencyList.AsObject;
  static serializeBinaryToWriter(message: CurrencyList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyList;
  static deserializeBinaryFromReader(message: CurrencyList, reader: jspb.BinaryReader): CurrencyList;
}

export namespace CurrencyList {
  export type AsObject = {
    currencyList: Array<Currency.AsObject>,
  }
}

export class Currency extends jspb.Message {
  getCurrencycode(): string;
  setCurrencycode(value: string): Currency;

  getNumericcode(): number;
  setNumericcode(value: number): Currency;

  getDisplayname(): string;
  setDisplayname(value: string): Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    currencycode: string,
    numericcode: number,
    displayname: string,
  }
}

export class EOrganizerList extends jspb.Message {
  getOrganizerList(): Array<EOrganizer>;
  setOrganizerList(value: Array<EOrganizer>): EOrganizerList;
  clearOrganizerList(): EOrganizerList;
  addOrganizer(value?: EOrganizer, index?: number): EOrganizer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EOrganizerList.AsObject;
  static toObject(includeInstance: boolean, msg: EOrganizerList): EOrganizerList.AsObject;
  static serializeBinaryToWriter(message: EOrganizerList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EOrganizerList;
  static deserializeBinaryFromReader(message: EOrganizerList, reader: jspb.BinaryReader): EOrganizerList;
}

export namespace EOrganizerList {
  export type AsObject = {
    organizerList: Array<EOrganizer.AsObject>,
  }
}

export class EOrganizer extends jspb.Message {
  getId(): number;
  setId(value: number): EOrganizer;

  getName(): string;
  setName(value: string): EOrganizer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EOrganizer.AsObject;
  static toObject(includeInstance: boolean, msg: EOrganizer): EOrganizer.AsObject;
  static serializeBinaryToWriter(message: EOrganizer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EOrganizer;
  static deserializeBinaryFromReader(message: EOrganizer, reader: jspb.BinaryReader): EOrganizer;
}

export namespace EOrganizer {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class CountryList extends jspb.Message {
  getCountryList(): Array<Country>;
  setCountryList(value: Array<Country>): CountryList;
  clearCountryList(): CountryList;
  addCountry(value?: Country, index?: number): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountryList.AsObject;
  static toObject(includeInstance: boolean, msg: CountryList): CountryList.AsObject;
  static serializeBinaryToWriter(message: CountryList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountryList;
  static deserializeBinaryFromReader(message: CountryList, reader: jspb.BinaryReader): CountryList;
}

export namespace CountryList {
  export type AsObject = {
    countryList: Array<Country.AsObject>,
  }
}

export class Country extends jspb.Message {
  getId(): number;
  setId(value: number): Country;

  getName(): string;
  setName(value: string): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class CityList extends jspb.Message {
  getCityList(): Array<City>;
  setCityList(value: Array<City>): CityList;
  clearCityList(): CityList;
  addCity(value?: City, index?: number): City;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CityList.AsObject;
  static toObject(includeInstance: boolean, msg: CityList): CityList.AsObject;
  static serializeBinaryToWriter(message: CityList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CityList;
  static deserializeBinaryFromReader(message: CityList, reader: jspb.BinaryReader): CityList;
}

export namespace CityList {
  export type AsObject = {
    cityList: Array<City.AsObject>,
  }
}

export class City extends jspb.Message {
  getId(): number;
  setId(value: number): City;

  getCountryid(): number;
  setCountryid(value: number): City;

  getName(): string;
  setName(value: string): City;

  getZoneid(): string;
  setZoneid(value: string): City;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): City.AsObject;
  static toObject(includeInstance: boolean, msg: City): City.AsObject;
  static serializeBinaryToWriter(message: City, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): City;
  static deserializeBinaryFromReader(message: City, reader: jspb.BinaryReader): City;
}

export namespace City {
  export type AsObject = {
    id: number,
    countryid: number,
    name: string,
    zoneid: string,
  }
}

export class SimpleVenueList extends jspb.Message {
  getSimplevenuelistList(): Array<SimpleVenue>;
  setSimplevenuelistList(value: Array<SimpleVenue>): SimpleVenueList;
  clearSimplevenuelistList(): SimpleVenueList;
  addSimplevenuelist(value?: SimpleVenue, index?: number): SimpleVenue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleVenueList.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleVenueList): SimpleVenueList.AsObject;
  static serializeBinaryToWriter(message: SimpleVenueList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleVenueList;
  static deserializeBinaryFromReader(message: SimpleVenueList, reader: jspb.BinaryReader): SimpleVenueList;
}

export namespace SimpleVenueList {
  export type AsObject = {
    simplevenuelistList: Array<SimpleVenue.AsObject>,
  }
}

export class VenueList extends jspb.Message {
  getVenuelistList(): Array<VenueList>;
  setVenuelistList(value: Array<VenueList>): VenueList;
  clearVenuelistList(): VenueList;
  addVenuelist(value?: VenueList, index?: number): VenueList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VenueList.AsObject;
  static toObject(includeInstance: boolean, msg: VenueList): VenueList.AsObject;
  static serializeBinaryToWriter(message: VenueList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VenueList;
  static deserializeBinaryFromReader(message: VenueList, reader: jspb.BinaryReader): VenueList;
}

export namespace VenueList {
  export type AsObject = {
    venuelistList: Array<VenueList.AsObject>,
  }
}

export class SimpleVenue extends jspb.Message {
  getId(): number;
  setId(value: number): SimpleVenue;

  getCityid(): number;
  setCityid(value: number): SimpleVenue;

  getCityname(): string;
  setCityname(value: string): SimpleVenue;

  getCurrency(): string;
  setCurrency(value: string): SimpleVenue;

  getName(): string;
  setName(value: string): SimpleVenue;

  getVenuetype(): VenueType | undefined;
  setVenuetype(value?: VenueType): SimpleVenue;
  hasVenuetype(): boolean;
  clearVenuetype(): SimpleVenue;

  getAddress(): string;
  setAddress(value: string): SimpleVenue;

  getGeolat(): string;
  setGeolat(value: string): SimpleVenue;

  getGeolon(): string;
  setGeolon(value: string): SimpleVenue;

  getDescription(): string;
  setDescription(value: string): SimpleVenue;

  getNamehex(): string;
  setNamehex(value: string): SimpleVenue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleVenue.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleVenue): SimpleVenue.AsObject;
  static serializeBinaryToWriter(message: SimpleVenue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleVenue;
  static deserializeBinaryFromReader(message: SimpleVenue, reader: jspb.BinaryReader): SimpleVenue;
}

export namespace SimpleVenue {
  export type AsObject = {
    id: number,
    cityid: number,
    cityname: string,
    currency: string,
    name: string,
    venuetype?: VenueType.AsObject,
    address: string,
    geolat: string,
    geolon: string,
    description: string,
    namehex: string,
  }
}

export class Venue extends jspb.Message {
  getSimplevenue(): SimpleVenue | undefined;
  setSimplevenue(value?: SimpleVenue): Venue;
  hasSimplevenue(): boolean;
  clearSimplevenue(): Venue;

  getBigimage(): Image | undefined;
  setBigimage(value?: Image): Venue;
  hasBigimage(): boolean;
  clearBigimage(): Venue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Venue.AsObject;
  static toObject(includeInstance: boolean, msg: Venue): Venue.AsObject;
  static serializeBinaryToWriter(message: Venue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Venue;
  static deserializeBinaryFromReader(message: Venue, reader: jspb.BinaryReader): Venue;
}

export namespace Venue {
  export type AsObject = {
    simplevenue?: SimpleVenue.AsObject,
    bigimage?: Image.AsObject,
  }

  export enum BigimageCase { 
    _BIGIMAGE_NOT_SET = 0,
    BIGIMAGE = 11,
  }
}

export class Image extends jspb.Message {
  getImg(): string;
  setImg(value: string): Image;

  getType(): string;
  setType(value: string): Image;

  getHash(): string;
  setHash(value: string): Image;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Image.AsObject;
  static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
  static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Image;
  static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
  export type AsObject = {
    img: string,
    type: string,
    hash: string,
  }
}

export class SimpleSeatingPlanList extends jspb.Message {
  getSeatingplanlistList(): Array<SimpleSeatingPlan>;
  setSeatingplanlistList(value: Array<SimpleSeatingPlan>): SimpleSeatingPlanList;
  clearSeatingplanlistList(): SimpleSeatingPlanList;
  addSeatingplanlist(value?: SimpleSeatingPlan, index?: number): SimpleSeatingPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleSeatingPlanList.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleSeatingPlanList): SimpleSeatingPlanList.AsObject;
  static serializeBinaryToWriter(message: SimpleSeatingPlanList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleSeatingPlanList;
  static deserializeBinaryFromReader(message: SimpleSeatingPlanList, reader: jspb.BinaryReader): SimpleSeatingPlanList;
}

export namespace SimpleSeatingPlanList {
  export type AsObject = {
    seatingplanlistList: Array<SimpleSeatingPlan.AsObject>,
  }
}

export class SeatingPlanList extends jspb.Message {
  getSeatingplanlistList(): Array<SeatingPlan>;
  setSeatingplanlistList(value: Array<SeatingPlan>): SeatingPlanList;
  clearSeatingplanlistList(): SeatingPlanList;
  addSeatingplanlist(value?: SeatingPlan, index?: number): SeatingPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatingPlanList.AsObject;
  static toObject(includeInstance: boolean, msg: SeatingPlanList): SeatingPlanList.AsObject;
  static serializeBinaryToWriter(message: SeatingPlanList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatingPlanList;
  static deserializeBinaryFromReader(message: SeatingPlanList, reader: jspb.BinaryReader): SeatingPlanList;
}

export namespace SeatingPlanList {
  export type AsObject = {
    seatingplanlistList: Array<SeatingPlan.AsObject>,
  }
}

export class SimpleSeatingPlan extends jspb.Message {
  getId(): number;
  setId(value: number): SimpleSeatingPlan;

  getVenueid(): number;
  setVenueid(value: number): SimpleSeatingPlan;

  getVenuename(): string;
  setVenuename(value: string): SimpleSeatingPlan;

  getCurrency(): string;
  setCurrency(value: string): SimpleSeatingPlan;

  getPlacement(): boolean;
  setPlacement(value: boolean): SimpleSeatingPlan;

  getName(): string;
  setName(value: string): SimpleSeatingPlan;

  getCategorylistList(): Array<Category>;
  setCategorylistList(value: Array<Category>): SimpleSeatingPlan;
  clearCategorylistList(): SimpleSeatingPlan;
  addCategorylist(value?: Category, index?: number): Category;

  getCategorylimitlistList(): Array<CategoryLimit>;
  setCategorylimitlistList(value: Array<CategoryLimit>): SimpleSeatingPlan;
  clearCategorylimitlistList(): SimpleSeatingPlan;
  addCategorylimitlist(value?: CategoryLimit, index?: number): CategoryLimit;

  getSplexists(): boolean;
  setSplexists(value: boolean): SimpleSeatingPlan;

  getOwner(): boolean;
  setOwner(value: boolean): SimpleSeatingPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleSeatingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleSeatingPlan): SimpleSeatingPlan.AsObject;
  static serializeBinaryToWriter(message: SimpleSeatingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleSeatingPlan;
  static deserializeBinaryFromReader(message: SimpleSeatingPlan, reader: jspb.BinaryReader): SimpleSeatingPlan;
}

export namespace SimpleSeatingPlan {
  export type AsObject = {
    id: number,
    venueid: number,
    venuename: string,
    currency: string,
    placement: boolean,
    name: string,
    categorylistList: Array<Category.AsObject>,
    categorylimitlistList: Array<CategoryLimit.AsObject>,
    splexists: boolean,
    owner: boolean,
  }
}

export class SeatingPlan extends jspb.Message {
  getSimpleseatingplan(): SimpleSeatingPlan | undefined;
  setSimpleseatingplan(value?: SimpleSeatingPlan): SeatingPlan;
  hasSimpleseatingplan(): boolean;
  clearSimpleseatingplan(): SeatingPlan;

  getSvgzip(): string;
  setSvgzip(value: string): SeatingPlan;

  getPng(): string;
  setPng(value: string): SeatingPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatingPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SeatingPlan): SeatingPlan.AsObject;
  static serializeBinaryToWriter(message: SeatingPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatingPlan;
  static deserializeBinaryFromReader(message: SeatingPlan, reader: jspb.BinaryReader): SeatingPlan;
}

export namespace SeatingPlan {
  export type AsObject = {
    simpleseatingplan?: SimpleSeatingPlan.AsObject,
    svgzip: string,
    png: string,
  }
}

export class Point extends jspb.Message {
  getX(): number;
  setX(value: number): Point;

  getY(): number;
  setY(value: number): Point;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point.AsObject;
  static toObject(includeInstance: boolean, msg: Point): Point.AsObject;
  static serializeBinaryToWriter(message: Point, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point;
  static deserializeBinaryFromReader(message: Point, reader: jspb.BinaryReader): Point;
}

export namespace Point {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class SeatData extends jspb.Message {
  getCoodrinates(): Point | undefined;
  setCoodrinates(value?: Point): SeatData;
  hasCoodrinates(): boolean;
  clearCoodrinates(): SeatData;

  getSeatid(): number;
  setSeatid(value: number): SeatData;

  getSector(): string;
  setSector(value: string): SeatData;

  getRow(): string;
  setRow(value: string): SeatData;

  getNumber(): string;
  setNumber(value: string): SeatData;

  getCategoryid(): number;
  setCategoryid(value: number): SeatData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatData.AsObject;
  static toObject(includeInstance: boolean, msg: SeatData): SeatData.AsObject;
  static serializeBinaryToWriter(message: SeatData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatData;
  static deserializeBinaryFromReader(message: SeatData, reader: jspb.BinaryReader): SeatData;
}

export namespace SeatData {
  export type AsObject = {
    coodrinates?: Point.AsObject,
    seatid: number,
    sector: string,
    row: string,
    number: string,
    categoryid: number,
  }
}

export class GetSeatingPlanFullData extends jspb.Message {
  getSeatingplan(): SeatingPlan | undefined;
  setSeatingplan(value?: SeatingPlan): GetSeatingPlanFullData;
  hasSeatingplan(): boolean;
  clearSeatingplan(): GetSeatingPlanFullData;

  getSeatdatalistList(): Array<SeatData>;
  setSeatdatalistList(value: Array<SeatData>): GetSeatingPlanFullData;
  clearSeatdatalistList(): GetSeatingPlanFullData;
  addSeatdatalist(value?: SeatData, index?: number): SeatData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSeatingPlanFullData.AsObject;
  static toObject(includeInstance: boolean, msg: GetSeatingPlanFullData): GetSeatingPlanFullData.AsObject;
  static serializeBinaryToWriter(message: GetSeatingPlanFullData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSeatingPlanFullData;
  static deserializeBinaryFromReader(message: GetSeatingPlanFullData, reader: jspb.BinaryReader): GetSeatingPlanFullData;
}

export namespace GetSeatingPlanFullData {
  export type AsObject = {
    seatingplan?: SeatingPlan.AsObject,
    seatdatalistList: Array<SeatData.AsObject>,
  }
}

export class Category extends jspb.Message {
  getId(): number;
  setId(value: number): Category;

  getPlacement(): boolean;
  setPlacement(value: boolean): Category;

  getName(): string;
  setName(value: string): Category;

  getSeatsnumber(): number;
  setSeatsnumber(value: number): Category;

  getInitprice(): number;
  setInitprice(value: number): Category;
  hasInitprice(): boolean;
  clearInitprice(): Category;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Category.AsObject;
  static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
  static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Category;
  static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
  export type AsObject = {
    id: number,
    placement: boolean,
    name: string,
    seatsnumber: number,
    initprice?: number,
  }

  export enum InitpriceCase { 
    _INITPRICE_NOT_SET = 0,
    INITPRICE = 5,
  }
}

export class CategoryLimit extends jspb.Message {
  getId(): number;
  setId(value: number): CategoryLimit;

  getCategorylistList(): Array<Category>;
  setCategorylistList(value: Array<Category>): CategoryLimit;
  clearCategorylistList(): CategoryLimit;
  addCategorylist(value?: Category, index?: number): Category;

  getLimit(): number;
  setLimit(value: number): CategoryLimit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryLimit.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryLimit): CategoryLimit.AsObject;
  static serializeBinaryToWriter(message: CategoryLimit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryLimit;
  static deserializeBinaryFromReader(message: CategoryLimit, reader: jspb.BinaryReader): CategoryLimit;
}

export namespace CategoryLimit {
  export type AsObject = {
    id: number,
    categorylistList: Array<Category.AsObject>,
    limit: number,
  }
}

export class SimpleActionList extends jspb.Message {
  getSimpleactionlistList(): Array<SimpleAction>;
  setSimpleactionlistList(value: Array<SimpleAction>): SimpleActionList;
  clearSimpleactionlistList(): SimpleActionList;
  addSimpleactionlist(value?: SimpleAction, index?: number): SimpleAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleActionList.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleActionList): SimpleActionList.AsObject;
  static serializeBinaryToWriter(message: SimpleActionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleActionList;
  static deserializeBinaryFromReader(message: SimpleActionList, reader: jspb.BinaryReader): SimpleActionList;
}

export namespace SimpleActionList {
  export type AsObject = {
    simpleactionlistList: Array<SimpleAction.AsObject>,
  }
}

export class ActionList extends jspb.Message {
  getActionlistList(): Array<Action>;
  setActionlistList(value: Array<Action>): ActionList;
  clearActionlistList(): ActionList;
  addActionlist(value?: Action, index?: number): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionList.AsObject;
  static toObject(includeInstance: boolean, msg: ActionList): ActionList.AsObject;
  static serializeBinaryToWriter(message: ActionList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionList;
  static deserializeBinaryFromReader(message: ActionList, reader: jspb.BinaryReader): ActionList;
}

export namespace ActionList {
  export type AsObject = {
    actionlistList: Array<Action.AsObject>,
  }
}

export class SimpleAction extends jspb.Message {
  getId(): number;
  setId(value: number): SimpleAction;

  getOrganizerid(): number;
  setOrganizerid(value: number): SimpleAction;

  getOrganizername(): string;
  setOrganizername(value: string): SimpleAction;

  getKind(): Kind | undefined;
  setKind(value?: Kind): SimpleAction;
  hasKind(): boolean;
  clearKind(): SimpleAction;

  getName(): string;
  setName(value: string): SimpleAction;

  getFullname(): string;
  setFullname(value: string): SimpleAction;

  getDuration(): number;
  setDuration(value: number): SimpleAction;

  getPostername(): string;
  setPostername(value: string): SimpleAction;

  getPosterdesc(): string;
  setPosterdesc(value: string): SimpleAction;

  getBooklettype(): BookletType | undefined;
  setBooklettype(value?: BookletType): SimpleAction;
  hasBooklettype(): boolean;
  clearBooklettype(): SimpleAction;

  getRating(): number;
  setRating(value: number): SimpleAction;

  getAge(): Age;
  setAge(value: Age): SimpleAction;

  getGenresetList(): Array<Genre>;
  setGenresetList(value: Array<Genre>): SimpleAction;
  clearGenresetList(): SimpleAction;
  addGenreset(value?: Genre, index?: number): Genre;

  getLegalowner(): string;
  setLegalowner(value: string): SimpleAction;

  getLegalownerinn(): string;
  setLegalownerinn(value: string): SimpleAction;

  getLegalownerphone(): string;
  setLegalownerphone(value: string): SimpleAction;

  getMinchargepercent(): number;
  setMinchargepercent(value: number): SimpleAction;

  getKdp(): number;
  setKdp(value: number): SimpleAction;
  hasKdp(): boolean;
  clearKdp(): SimpleAction;

  getCityidsetList(): Array<number>;
  setCityidsetList(value: Array<number>): SimpleAction;
  clearCityidsetList(): SimpleAction;
  addCityidset(value: number, index?: number): SimpleAction;

  getVenueidsetList(): Array<number>;
  setVenueidsetList(value: Array<number>): SimpleAction;
  clearVenueidsetList(): SimpleAction;
  addVenueidset(value: number, index?: number): SimpleAction;

  getActual(): boolean;
  setActual(value: boolean): SimpleAction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleAction.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleAction): SimpleAction.AsObject;
  static serializeBinaryToWriter(message: SimpleAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleAction;
  static deserializeBinaryFromReader(message: SimpleAction, reader: jspb.BinaryReader): SimpleAction;
}

export namespace SimpleAction {
  export type AsObject = {
    id: number,
    organizerid: number,
    organizername: string,
    kind?: Kind.AsObject,
    name: string,
    fullname: string,
    duration: number,
    postername: string,
    posterdesc: string,
    booklettype?: BookletType.AsObject,
    rating: number,
    age: Age,
    genresetList: Array<Genre.AsObject>,
    legalowner: string,
    legalownerinn: string,
    legalownerphone: string,
    minchargepercent: number,
    kdp?: number,
    cityidsetList: Array<number>,
    venueidsetList: Array<number>,
    actual: boolean,
  }

  export enum BooklettypeCase { 
    _BOOKLETTYPE_NOT_SET = 0,
    BOOKLETTYPE = 12,
  }

  export enum KdpCase { 
    _KDP_NOT_SET = 0,
    KDP = 20,
  }
}

export class Action extends jspb.Message {
  getSimpleaction(): SimpleAction | undefined;
  setSimpleaction(value?: SimpleAction): Action;
  hasSimpleaction(): boolean;
  clearSimpleaction(): Action;

  getSmallimage(): Image | undefined;
  setSmallimage(value?: Image): Action;
  hasSmallimage(): boolean;
  clearSmallimage(): Action;

  getBigimage(): Image | undefined;
  setBigimage(value?: Image): Action;
  hasBigimage(): boolean;
  clearBigimage(): Action;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    simpleaction?: SimpleAction.AsObject,
    smallimage?: Image.AsObject,
    bigimage?: Image.AsObject,
  }

  export enum SmallimageCase { 
    _SMALLIMAGE_NOT_SET = 0,
    SMALLIMAGE = 10,
  }

  export enum BigimageCase { 
    _BIGIMAGE_NOT_SET = 0,
    BIGIMAGE = 11,
  }
}

export class ActionEventList extends jspb.Message {
  getActioneventlistList(): Array<ActionEvent>;
  setActioneventlistList(value: Array<ActionEvent>): ActionEventList;
  clearActioneventlistList(): ActionEventList;
  addActioneventlist(value?: ActionEvent, index?: number): ActionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEventList.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEventList): ActionEventList.AsObject;
  static serializeBinaryToWriter(message: ActionEventList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEventList;
  static deserializeBinaryFromReader(message: ActionEventList, reader: jspb.BinaryReader): ActionEventList;
}

export namespace ActionEventList {
  export type AsObject = {
    actioneventlistList: Array<ActionEvent.AsObject>,
  }
}

export class ActionEvent extends jspb.Message {
  getId(): number;
  setId(value: number): ActionEvent;

  getPlanid(): number;
  setPlanid(value: number): ActionEvent;

  getPlanname(): string;
  setPlanname(value: string): ActionEvent;

  getActionid(): number;
  setActionid(value: number): ActionEvent;

  getActionname(): string;
  setActionname(value: string): ActionEvent;

  getCurrency(): string;
  setCurrency(value: string): ActionEvent;

  getQuota(): boolean;
  setQuota(value: boolean): ActionEvent;

  getCategorypricelistList(): Array<CategoryPrice>;
  setCategorypricelistList(value: Array<CategoryPrice>): ActionEvent;
  clearCategorypricelistList(): ActionEvent;
  addCategorypricelist(value?: CategoryPrice, index?: number): CategoryPrice;

  getTariffplanlistList(): Array<TariffPlan>;
  setTariffplanlistList(value: Array<TariffPlan>): ActionEvent;
  clearTariffplanlistList(): ActionEvent;
  addTariffplanlist(value?: TariffPlan, index?: number): TariffPlan;

  getShowtime(): string;
  setShowtime(value: string): ActionEvent;

  getSellstarttime(): string;
  setSellstarttime(value: string): ActionEvent;

  getSellendtime(): string;
  setSellendtime(value: string): ActionEvent;

  getEtickets(): boolean;
  setEtickets(value: boolean): ActionEvent;

  getFullnamerequired(): boolean;
  setFullnamerequired(value: boolean): ActionEvent;

  getPhonerequired(): boolean;
  setPhonerequired(value: boolean): ActionEvent;

  getFanidrequired(): boolean;
  setFanidrequired(value: boolean): ActionEvent;

  getTicketrefundallowed(): boolean;
  setTicketrefundallowed(value: boolean): ActionEvent;

  getTicketreissueallowed(): boolean;
  setTicketreissueallowed(value: boolean): ActionEvent;

  getMaxreservetime(): struct_pb.NullableUInt64 | undefined;
  setMaxreservetime(value?: struct_pb.NullableUInt64): ActionEvent;
  hasMaxreservetime(): boolean;
  clearMaxreservetime(): ActionEvent;

  getMaxtickets(): struct_pb.NullableUInt64 | undefined;
  setMaxtickets(value?: struct_pb.NullableUInt64): ActionEvent;
  hasMaxtickets(): boolean;
  clearMaxtickets(): ActionEvent;

  getVat(): number;
  setVat(value: number): ActionEvent;

  getSellenabled(): boolean;
  setSellenabled(value: boolean): ActionEvent;

  getPlacementplan(): boolean;
  setPlacementplan(value: boolean): ActionEvent;

  getGatewayevent(): GatewayEvent | undefined;
  setGatewayevent(value?: GatewayEvent): ActionEvent;
  hasGatewayevent(): boolean;
  clearGatewayevent(): ActionEvent;

  getArchival(): boolean;
  setArchival(value: boolean): ActionEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEvent): ActionEvent.AsObject;
  static serializeBinaryToWriter(message: ActionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEvent;
  static deserializeBinaryFromReader(message: ActionEvent, reader: jspb.BinaryReader): ActionEvent;
}

export namespace ActionEvent {
  export type AsObject = {
    id: number,
    planid: number,
    planname: string,
    actionid: number,
    actionname: string,
    currency: string,
    quota: boolean,
    categorypricelistList: Array<CategoryPrice.AsObject>,
    tariffplanlistList: Array<TariffPlan.AsObject>,
    showtime: string,
    sellstarttime: string,
    sellendtime: string,
    etickets: boolean,
    fullnamerequired: boolean,
    phonerequired: boolean,
    fanidrequired: boolean,
    ticketrefundallowed: boolean,
    ticketreissueallowed: boolean,
    maxreservetime?: struct_pb.NullableUInt64.AsObject,
    maxtickets?: struct_pb.NullableUInt64.AsObject,
    vat: number,
    sellenabled: boolean,
    placementplan: boolean,
    gatewayevent?: GatewayEvent.AsObject,
    archival: boolean,
  }
}

export class EventSeatState extends jspb.Message {
  getId(): number;
  setId(value: number): EventSeatState;

  getDescription(): string;
  setDescription(value: string): EventSeatState;

  getName(): string;
  setName(value: string): EventSeatState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSeatState.AsObject;
  static toObject(includeInstance: boolean, msg: EventSeatState): EventSeatState.AsObject;
  static serializeBinaryToWriter(message: EventSeatState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSeatState;
  static deserializeBinaryFromReader(message: EventSeatState, reader: jspb.BinaryReader): EventSeatState;
}

export namespace EventSeatState {
  export type AsObject = {
    id: number,
    description: string,
    name: string,
  }
}

export class SeatLocation extends jspb.Message {
  getSector(): string;
  setSector(value: string): SeatLocation;

  getRow(): string;
  setRow(value: string): SeatLocation;

  getNumber(): string;
  setNumber(value: string): SeatLocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SeatLocation.AsObject;
  static toObject(includeInstance: boolean, msg: SeatLocation): SeatLocation.AsObject;
  static serializeBinaryToWriter(message: SeatLocation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SeatLocation;
  static deserializeBinaryFromReader(message: SeatLocation, reader: jspb.BinaryReader): SeatLocation;
}

export namespace SeatLocation {
  export type AsObject = {
    sector: string,
    row: string,
    number: string,
  }
}

export class EventSeat extends jspb.Message {
  getId(): number;
  setId(value: number): EventSeat;

  getCategoryprice(): CategoryPrice | undefined;
  setCategoryprice(value?: CategoryPrice): EventSeat;
  hasCategoryprice(): boolean;
  clearCategoryprice(): EventSeat;

  getState(): EventSeatState | undefined;
  setState(value?: EventSeatState): EventSeat;
  hasState(): boolean;
  clearState(): EventSeat;

  getSeatlocation(): SeatLocation | undefined;
  setSeatlocation(value?: SeatLocation): EventSeat;
  hasSeatlocation(): boolean;
  clearSeatlocation(): EventSeat;

  getBarcode(): string;
  setBarcode(value: string): EventSeat;
  hasBarcode(): boolean;
  clearBarcode(): EventSeat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventSeat.AsObject;
  static toObject(includeInstance: boolean, msg: EventSeat): EventSeat.AsObject;
  static serializeBinaryToWriter(message: EventSeat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventSeat;
  static deserializeBinaryFromReader(message: EventSeat, reader: jspb.BinaryReader): EventSeat;
}

export namespace EventSeat {
  export type AsObject = {
    id: number,
    categoryprice?: CategoryPrice.AsObject,
    state?: EventSeatState.AsObject,
    seatlocation?: SeatLocation.AsObject,
    barcode?: string,
  }

  export enum SeatlocationCase { 
    _SEATLOCATION_NOT_SET = 0,
    SEATLOCATION = 4,
  }

  export enum BarcodeCase { 
    _BARCODE_NOT_SET = 0,
    BARCODE = 5,
  }
}

export class ActionEventData extends jspb.Message {
  getId(): number;
  setId(value: number): ActionEventData;

  getSvgdata(): string;
  setSvgdata(value: string): ActionEventData;
  hasSvgdata(): boolean;
  clearSvgdata(): ActionEventData;

  getMismatchedprice(): number;
  setMismatchedprice(value: number): ActionEventData;

  getMismatchedname(): number;
  setMismatchedname(value: number): ActionEventData;

  getMismatchedseat(): number;
  setMismatchedseat(value: number): ActionEventData;

  getSplexists(): boolean;
  setSplexists(value: boolean): ActionEventData;

  getEtsnotavailidsetList(): Array<number>;
  setEtsnotavailidsetList(value: Array<number>): ActionEventData;
  clearEtsnotavailidsetList(): ActionEventData;
  addEtsnotavailidset(value: number, index?: number): ActionEventData;

  getTariffplanlistList(): Array<TariffPlan>;
  setTariffplanlistList(value: Array<TariffPlan>): ActionEventData;
  clearTariffplanlistList(): ActionEventData;
  addTariffplanlist(value?: TariffPlan, index?: number): TariffPlan;

  getCategorypricelistList(): Array<CategoryPrice>;
  setCategorypricelistList(value: Array<CategoryPrice>): ActionEventData;
  clearCategorypricelistList(): ActionEventData;
  addCategorypricelist(value?: CategoryPrice, index?: number): CategoryPrice;

  getEventseatlistList(): Array<EventSeat>;
  setEventseatlistList(value: Array<EventSeat>): ActionEventData;
  clearEventseatlistList(): ActionEventData;
  addEventseatlist(value?: EventSeat, index?: number): EventSeat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionEventData.AsObject;
  static toObject(includeInstance: boolean, msg: ActionEventData): ActionEventData.AsObject;
  static serializeBinaryToWriter(message: ActionEventData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionEventData;
  static deserializeBinaryFromReader(message: ActionEventData, reader: jspb.BinaryReader): ActionEventData;
}

export namespace ActionEventData {
  export type AsObject = {
    id: number,
    svgdata?: string,
    mismatchedprice: number,
    mismatchedname: number,
    mismatchedseat: number,
    splexists: boolean,
    etsnotavailidsetList: Array<number>,
    tariffplanlistList: Array<TariffPlan.AsObject>,
    categorypricelistList: Array<CategoryPrice.AsObject>,
    eventseatlistList: Array<EventSeat.AsObject>,
  }

  export enum SvgdataCase { 
    _SVGDATA_NOT_SET = 0,
    SVGDATA = 2,
  }
}

export class CategoryPrice extends jspb.Message {
  getId(): number;
  setId(value: number): CategoryPrice;

  getPlacement(): boolean;
  setPlacement(value: boolean): CategoryPrice;

  getName(): string;
  setName(value: string): CategoryPrice;

  getPrice(): number;
  setPrice(value: number): CategoryPrice;

  getAvailability(): number;
  setAvailability(value: number): CategoryPrice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryPrice.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryPrice): CategoryPrice.AsObject;
  static serializeBinaryToWriter(message: CategoryPrice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryPrice;
  static deserializeBinaryFromReader(message: CategoryPrice, reader: jspb.BinaryReader): CategoryPrice;
}

export namespace CategoryPrice {
  export type AsObject = {
    id: number,
    placement: boolean,
    name: string,
    price: number,
    availability: number,
  }
}

export class TariffPlan extends jspb.Message {
  getId(): number;
  setId(value: number): TariffPlan;

  getName(): string;
  setName(value: string): TariffPlan;

  getTariffmapMap(): jspb.Map<number, number>;
  clearTariffmapMap(): TariffPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TariffPlan.AsObject;
  static toObject(includeInstance: boolean, msg: TariffPlan): TariffPlan.AsObject;
  static serializeBinaryToWriter(message: TariffPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TariffPlan;
  static deserializeBinaryFromReader(message: TariffPlan, reader: jspb.BinaryReader): TariffPlan;
}

export namespace TariffPlan {
  export type AsObject = {
    id: number,
    name: string,
    tariffmapMap: Array<[number, number]>,
  }
}

export class GatewayEventList extends jspb.Message {
  getGatewayeventlistList(): Array<GatewayEvent>;
  setGatewayeventlistList(value: Array<GatewayEvent>): GatewayEventList;
  clearGatewayeventlistList(): GatewayEventList;
  addGatewayeventlist(value?: GatewayEvent, index?: number): GatewayEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayEventList.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayEventList): GatewayEventList.AsObject;
  static serializeBinaryToWriter(message: GatewayEventList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayEventList;
  static deserializeBinaryFromReader(message: GatewayEventList, reader: jspb.BinaryReader): GatewayEventList;
}

export namespace GatewayEventList {
  export type AsObject = {
    gatewayeventlistList: Array<GatewayEvent.AsObject>,
  }
}

export class GatewayEvent extends jspb.Message {
  getGateway(): Gateway | undefined;
  setGateway(value?: Gateway): GatewayEvent;
  hasGateway(): boolean;
  clearGateway(): GatewayEvent;

  getEventid(): string;
  setEventid(value: string): GatewayEvent;

  getEventuid(): string;
  setEventuid(value: string): GatewayEvent;

  getShowtime(): string;
  setShowtime(value: string): GatewayEvent;

  getSellendtime(): struct_pb.NullableString | undefined;
  setSellendtime(value?: struct_pb.NullableString): GatewayEvent;
  hasSellendtime(): boolean;
  clearSellendtime(): GatewayEvent;

  getCurrency(): string;
  setCurrency(value: string): GatewayEvent;

  getActionid(): struct_pb.NullableString | undefined;
  setActionid(value?: struct_pb.NullableString): GatewayEvent;
  hasActionid(): boolean;
  clearActionid(): GatewayEvent;

  getActionname(): string;
  setActionname(value: string): GatewayEvent;

  getVenueid(): struct_pb.NullableString | undefined;
  setVenueid(value?: struct_pb.NullableString): GatewayEvent;
  hasVenueid(): boolean;
  clearVenueid(): GatewayEvent;

  getVenuename(): string;
  setVenuename(value: string): GatewayEvent;

  getPlanid(): struct_pb.NullableString | undefined;
  setPlanid(value?: struct_pb.NullableString): GatewayEvent;
  hasPlanid(): boolean;
  clearPlanid(): GatewayEvent;

  getPlanname(): struct_pb.NullableString | undefined;
  setPlanname(value?: struct_pb.NullableString): GatewayEvent;
  hasPlanname(): boolean;
  clearPlanname(): GatewayEvent;

  getDataList(): Array<string>;
  setDataList(value: Array<string>): GatewayEvent;
  clearDataList(): GatewayEvent;
  addData(value: string, index?: number): GatewayEvent;

  getIncompatibilityreason(): struct_pb.NullableString | undefined;
  setIncompatibilityreason(value?: struct_pb.NullableString): GatewayEvent;
  hasIncompatibilityreason(): boolean;
  clearIncompatibilityreason(): GatewayEvent;

  getFullnamerequired(): struct_pb.NullableBool | undefined;
  setFullnamerequired(value?: struct_pb.NullableBool): GatewayEvent;
  hasFullnamerequired(): boolean;
  clearFullnamerequired(): GatewayEvent;

  getPhonerequired(): struct_pb.NullableBool | undefined;
  setPhonerequired(value?: struct_pb.NullableBool): GatewayEvent;
  hasPhonerequired(): boolean;
  clearPhonerequired(): GatewayEvent;

  getFanidrequired(): struct_pb.NullableBool | undefined;
  setFanidrequired(value?: struct_pb.NullableBool): GatewayEvent;
  hasFanidrequired(): boolean;
  clearFanidrequired(): GatewayEvent;

  getTicketrefundallowed(): struct_pb.NullableBool | undefined;
  setTicketrefundallowed(value?: struct_pb.NullableBool): GatewayEvent;
  hasTicketrefundallowed(): boolean;
  clearTicketrefundallowed(): GatewayEvent;

  getTicketreissueallowed(): struct_pb.NullableBool | undefined;
  setTicketreissueallowed(value?: struct_pb.NullableBool): GatewayEvent;
  hasTicketreissueallowed(): boolean;
  clearTicketreissueallowed(): GatewayEvent;

  getMaxtickets(): struct_pb.NullableUInt64 | undefined;
  setMaxtickets(value?: struct_pb.NullableUInt64): GatewayEvent;
  hasMaxtickets(): boolean;
  clearMaxtickets(): GatewayEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GatewayEvent.AsObject;
  static toObject(includeInstance: boolean, msg: GatewayEvent): GatewayEvent.AsObject;
  static serializeBinaryToWriter(message: GatewayEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GatewayEvent;
  static deserializeBinaryFromReader(message: GatewayEvent, reader: jspb.BinaryReader): GatewayEvent;
}

export namespace GatewayEvent {
  export type AsObject = {
    gateway?: Gateway.AsObject,
    eventid: string,
    eventuid: string,
    showtime: string,
    sellendtime?: struct_pb.NullableString.AsObject,
    currency: string,
    actionid?: struct_pb.NullableString.AsObject,
    actionname: string,
    venueid?: struct_pb.NullableString.AsObject,
    venuename: string,
    planid?: struct_pb.NullableString.AsObject,
    planname?: struct_pb.NullableString.AsObject,
    dataList: Array<string>,
    incompatibilityreason?: struct_pb.NullableString.AsObject,
    fullnamerequired?: struct_pb.NullableBool.AsObject,
    phonerequired?: struct_pb.NullableBool.AsObject,
    fanidrequired?: struct_pb.NullableBool.AsObject,
    ticketrefundallowed?: struct_pb.NullableBool.AsObject,
    ticketreissueallowed?: struct_pb.NullableBool.AsObject,
    maxtickets?: struct_pb.NullableUInt64.AsObject,
  }
}

export enum UserType { 
  OPERATOR = 0,
  AGENT = 1,
  ORGANIZER = 2,
}
export enum Age { 
  C_0 = 0,
  C_6 = 1,
  C_12 = 2,
  C_16 = 3,
  C_18 = 4,
}
