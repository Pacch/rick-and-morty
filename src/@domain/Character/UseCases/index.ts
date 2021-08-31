import { httpCharacterRepository } from "../Infrastructure";
import GetCharactersUseCase from "./GetCharactersUseCase";

export const getCharactersUseCase = () =>
  new GetCharactersUseCase(httpCharacterRepository());
