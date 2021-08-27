import FetcherFactory from "@domain/_shared/Fetcher/Factory";
import HTTPCharacterRepository from "./HTTPCharacterRepository";

export const httpCharacterRepository = () =>
  new HTTPCharacterRepository(FetcherFactory.httpFetcher);
