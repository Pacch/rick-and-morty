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

  public async getCharacters({
    page,
    filter,
  }: {
    page: number;
    filter: {
      name?: string | null;
      status?: "alive" | "dead" | "unknown" | null;
    };
  }): Promise<{
    pages: number;
    characters: CharacterInfoEntity[];
  }> {
    const { name, status } = filter;
    const queryParams = {
      page,
      name: name || null,
      status,
    };

    const {
      data: { results: Characters, info },
    } = await this._fetcher.request.get("/character", { params: queryParams });

    const charactersEntities = Characters.map(
      (character: ICharacterInfoParams) => {
        return characterInfoEntity(character);
      }
    );

    return {
      pages: info?.pages,
      characters: charactersEntities,
    };
  }
}
