import CharacterInfoEntity, {
  ICharacterInfoParams,
} from "./CharacterInfoEntity";

export const characterInfoEntity = (params: ICharacterInfoParams) =>
  new CharacterInfoEntity({ ...params });
