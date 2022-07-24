export interface IErrorFields {
  dates: { IsError: boolean; textMessage: string };
  latitudine: { IsError: boolean; textMessage: string };
  longitudine: { IsError: boolean; textMessage: string };
}
export interface Geometry {
  lat: number;
  lng: number;
}

export interface Result {
  geometry: Geometry;
  formatted: string;
}

export interface IGetLatLong {
  results: Result[];
  total_results: number;
}

export interface ICityState {
  city: string;
  search: boolean;
}

export interface IFilters {
  interval: string;
  dateFrom: string;
  dateTo: string;
  state?: string;
  lat?: number;
  long?: number;
}

export interface IInfoDataAPI {
  tab: string;
  date: string;
  filters: IFilters;
}
export interface IAppStore {
  cityFounded: string;
  latitudine: number | null;
  longitudine: number | null;
  error: string | null;
  dataAPI: IStatistics[];
  errorDataAPI: string | null;
  infoDataAPI: IInfoDataAPI;
  populateCityFounded: (newCityFounded: string) => void;
  populateLat: (latitudine: number | null) => void;
  populateLong: (longitudine: number | null) => void;
  populateError: (error: string | null) => void;
  populateDataAPI: (newDataAPI: IStatistics[]) => void;
  populateErrorDataAPI: (newError: string | null) => void;
  populateInfoDataAPI: (newInfoDataAPI: IInfoDataAPI) => void;
}

export interface DateFrom {
  dateFrom: Date;
  setDateFrom: React.Dispatch<React.SetStateAction<Date>>;
}

export interface DateTo {
  dateTo: Date;
  setDateTo: React.Dispatch<React.SetStateAction<Date>>;
}

export interface IModal {
  handleClose: () => void;
  open: boolean;
}

export interface IDateFromTo {
  dateF: DateFrom;
  dateT: DateTo;
}

export type IIntervalData = 'day' | 'month' | 'year';

export interface IIntervalDataState {
  intervalData: IIntervalData;
  setIntervalData: React.Dispatch<React.SetStateAction<IIntervalData>>;
}
export interface IDatePickerFromTo {
  intervalDataState: IIntervalDataState;
  dateFromTo: IDateFromTo;
  errorFields: IErrorFields;
}

export interface ICrumbs {
  name: string;
  href: string;
}

export interface Time {
  interval_start: Date;
  max: Date;
  min: Date;
}

export interface Value {
  average: number;
  count: number;
  max: number;
  min: number;
}

export interface IStatistics {
  time: Time;
  value: Value;
}

export interface ICountries {
  AE: string;
  AF: string;
  AFG: string;
  AGO: string;
  AL: string;
  ALB: string;
  AM: string;
  AO: string;
  AQ: string;
  AR: string;
  ARE: string;
  ARG: string;
  ARM: string;
  AT: string;
  ATA: string;
  ATF: string;
  AU: string;
  AUS: string;
  AUT: string;
  AZ: string;
  AZE: string;
  BA: string;
  BD: string;
  BDI: string;
  BE: string;
  BEL: string;
  BEN: string;
  BF: string;
  BFA: string;
  BG: string;
  BGD: string;
  BGR: string;
  BHS: string;
  BI: string;
  BIH: string;
  BJ: string;
  BLR: string;
  BLZ: string;
  BN: string;
  BO: string;
  BOL: string;
  BR: string;
  BRA: string;
  BRN: string;
  BS: string;
  BT: string;
  BTN: string;
  BW: string;
  BWA: string;
  BY: string;
  BZ: string;
  CA: string;
  CAF: string;
  CAN: string;
  CD: string;
  CF: string;
  CG: string;
  CH: string;
  CHE: string;
  CHL: string;
  CHN: string;
  CI: string;
  CIV: string;
  CL: string;
  CM: string;
  CMR: string;
  CN: string;
  CO: string;
  COD: string;
  COG: string;
  COL: string;
  CR: string;
  CRI: string;
  CU: string;
  CUB: string;
  CY: string;
  CYP: string;
  CZ: string;
  CZE: string;
  DE: string;
  DEU: string;
  DJ: string;
  DJI: string;
  DK: string;
  DNK: string;
  DO: string;
  DOM: string;
  DZ: string;
  DZA: string;
  EC: string;
  ECU: string;
  EE: string;
  EG: string;
  EGY: string;
  EH: string;
  ER: string;
  ERI: string;
  ES: string;
  ESH: string;
  ESP: string;
  EST: string;
  ET: string;
  ETH: string;
  FI: string;
  FIN: string;
  FJ: string;
  FJI: string;
  FK: string;
  FLK: string;
  FR: string;
  FRA: string;
  GA: string;
  GAB: string;
  GB: string;
  GBR: string;
  GE: string;
  GEO: string;
  GH: string;
  GHA: string;
  GIN: string;
  GL: string;
  GM: string;
  GMB: string;
  GN: string;
  GNB: string;
  GNQ: string;
  GQ: string;
  GR: string;
  GRC: string;
  GRL: string;
  GT: string;
  GTM: string;
  GUY: string;
  GW: string;
  GY: string;
  HN: string;
  HND: string;
  HR: string;
  HRV: string;
  HT: string;
  HTI: string;
  HU: string;
  HUN: string;
  ID: string;
  IDN: string;
  IE: string;
  IL: string;
  IN: string;
  IND: string;
  IQ: string;
  IR: string;
  IRL: string;
  IRN: string;
  IRQ: string;
  IS: string;
  ISL: string;
  ISR: string;
  IT: string;
  ITA: string;
  JAM: string;
  JM: string;
  JO: string;
  JOR: string;
  JP: string;
  JPN: string;
  KAZ: string;
  KE: string;
  KEN: string;
  KG: string;
  KGZ: string;
  KH: string;
  KHM: string;
  KOR: string;
  KP: string;
  KR: string;
  KW: string;
  KWT: string;
  KZ: string;
  LA: string;
  LAO: string;
  LB: string;
  LBN: string;
  LBR: string;
  LBY: string;
  LK: string;
  LKA: string;
  LR: string;
  LS: string;
  LSO: string;
  LT: string;
  LTU: string;
  LU: string;
  LUX: string;
  LV: string;
  LVA: string;
  LY: string;
  MA: string;
  MAR: string;
  MD: string;
  MDA: string;
  MDG: string;
  ME: string;
  MEX: string;
  MG: string;
  MK: string;
  MKD: string;
  ML: string;
  MLI: string;
  MM: string;
  MMR: string;
  MN: string;
  MNE: string;
  MNG: string;
  MOZ: string;
  MR: string;
  MRT: string;
  MW: string;
  MWI: string;
  MX: string;
  MY: string;
  MYS: string;
  MZ: string;
  NA: string;
  NAM: string;
  NC: string;
  NCL: string;
  NE: string;
  NER: string;
  NG: string;
  NGA: string;
  NI: string;
  NIC: string;
  NL: string;
  NLD: string;
  NO: string;
  NOR: string;
  NP: string;
  NPL: string;
  NZ: string;
  NZL: string;
  OM: string;
  OMN: string;
  PA: string;
  PAK: string;
  PAN: string;
  PE: string;
  PER: string;
  PG: string;
  PH: string;
  PHL: string;
  PK: string;
  PL: string;
  PNG: string;
  POL: string;
  PR: string;
  PRI: string;
  PRK: string;
  PRT: string;
  PRY: string;
  PS: string;
  PSE: string;
  PT: string;
  PY: string;
  QA: string;
  QAT: string;
  RO: string;
  ROU: string;
  RS: string;
  RU: string;
  RUS: string;
  RW: string;
  RWA: string;
  SA: string;
  SAU: string;
  SB: string;
  SD: string;
  SDN: string;
  SE: string;
  SEN: string;
  SI: string;
  SK: string;
  SL: string;
  SLB: string;
  SLE: string;
  SLV: string;
  SN: string;
  SO: string;
  SOM: string;
  SR: string;
  SRB: string;
  SS: string;
  SSD: string;
  SUR: string;
  SV: string;
  SVK: string;
  SVN: string;
  SWE: string;
  SWZ: string;
  SY: string;
  SYR: string;
  SZ: string;
  TCD: string;
  TD: string;
  TF: string;
  TG: string;
  TGO: string;
  TH: string;
  THA: string;
  TJ: string;
  TJK: string;
  TKM: string;
  TL: string;
  TLS: string;
  TM: string;
  TN: string;
  TR: string;
  TT: string;
  TTO: string;
  TUN: string;
  TUR: string;
  TW: string;
  TWN: string;
  TZ: string;
  TZA: string;
  UA: string;
  UG: string;
  UGA: string;
  UKR: string;
  URY: string;
  US: string;
  USA: string;
  UY: string;
  UZ: string;
  UZB: string;
  VE: string;
  VEN: string;
  VN: string;
  VNM: string;
  VU: string;
  VUT: string;
  XK: string;
  XKX: string;
  YE: string;
  YEM: string;
  ZA: string;
  ZAF: string;
  ZM: string;
  ZMB: string;
  ZW: string;
  ZWE: string;
}
