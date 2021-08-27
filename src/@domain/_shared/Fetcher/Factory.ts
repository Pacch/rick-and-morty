import Config from "@domain/_config";
import AxiosFetcher from "./AxiosFetcher";

const config = new Config();

export default class FetcherFactory {
  public static httpFetcher = new AxiosFetcher(config);
}
