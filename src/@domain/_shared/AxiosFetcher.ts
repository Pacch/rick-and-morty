import { AxiosInstance } from "axios";
import axios from "axios";
import FetcherInput from "./FetcherInput";

export default class AxiosFetcher implements FetcherInput {
  private _fetcher: AxiosInstance;
  private _config: any;
  private _url: string;

  constructor(config: any, baseURL?: string) {
    this._fetcher = axios.create({
      baseURL: baseURL || config.get("API_HOST"),
    });
    this._url = baseURL || config.get("API_HOST");
    this._config = config;
  }

  public get request() {
    return this._fetcher;
  }
}
