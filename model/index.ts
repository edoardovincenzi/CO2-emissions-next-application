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
  dataAPI: { data: IStatistics[]; info: IInfoDataAPI };
  errorDataAPI: string | null;
  populateCityFounded: (newCityFounded: string) => void;
  populateLat: (latitudine: number | null) => void;
  populateLong: (longitudine: number | null) => void;
  populateDataAPI: (newDataAPI: {
    data: IStatistics[];
    info: IInfoDataAPI;
  }) => void;
  populateErrorDataAPI: (newError: string | null) => void;
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
