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

  public async getCharacters(params: {
    page: number;
    filter: {
      name?: string | null;
      status?: "alive" | "dead" | "unknown" | null;
    };
  }): Promise<{
    pages: number;
    characters: CharacterInfoEntity[];
  }> {
    const {
      data: { results: Characters, info },
    } = await this._fetcher.request.get(
      `/character/${params?.page ? `?page=${params.page}` : ""}${
        params.filter.name ? `&name=${params.filter.name}` : ""
      }${params.filter.status ? `&status=${params.filter.status}` : ""}
      `
    );

    const charactersEntities = Characters.map(
      (character: ICharacterInfoParams) => {
        const entity = characterInfoEntity(character);
        return entity;
      }
    );

    return {
      pages: info?.pages,
      characters: charactersEntities,
    };
  }
}
