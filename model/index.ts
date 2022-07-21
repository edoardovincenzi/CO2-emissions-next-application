export interface IErrorFields {
  dates: { IsError: boolean; textMessage: string };
  latitudine: { IsError: boolean; textMessage: string };
  longitudine: { IsError: boolean; textMessage: string };
}

export interface ICrumbs {
  name: string;
  href: string;
}
