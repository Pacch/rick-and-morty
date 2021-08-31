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
    const { page } = params;
    const { name, status } = params.filter;

    const pagination = page ? `?page=${page}` : "";
    const nameFilter = name ? `&name=${name}` : "";
    const statusFilter = status ? `&status=${status}` : "";

    const {
      data: { results: Characters, info },
    } = await this._fetcher.request.get(
      `/character/${pagination}${nameFilter}${statusFilter}`
    );

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
