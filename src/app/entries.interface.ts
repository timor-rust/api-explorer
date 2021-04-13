export interface EntriesInterface {
  count: number;
  entries: EntryInterface[];
}
export interface EntryInterface {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
  showMore?: boolean;
}
