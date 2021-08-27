import FetcherInput from "@domain/_shared/Fetcher/AxiosFetcher";
import ICharacterRepository from "../Repositories/ICharacterRepository";
import CharacterInfoEntity, {
  ICharacterInfoParams,
} from "../Entities/CharacterInfoEntity";
import { characterInfoEntity } from "../Entities";

export default class HTTPCharacterRepository implements ICharacterRepository {
  private _fetcher: FetcherInput;

  constructor(fetcher: FetcherInput) {
    this._fetcher = fetcher;
  }

  public async getCharacters(): Promise<CharacterInfoEntity[]> {
    const {
      data: { results: Characters },
    } = await this._fetcher.request.get("/character");

    const charactersEntities = Characters.map(
      (character: ICharacterInfoParams) => {
        const entity = characterInfoEntity(character);
        return entity;
      }
    );

    return charactersEntities;
  }
}
