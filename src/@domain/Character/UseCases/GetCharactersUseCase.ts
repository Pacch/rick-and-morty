import ICharacterRepository from "../Repositories/ICharacterRepository";

interface IFilterParams {
  page: number;
  name?: string;
  status?: "alive" | "dead" | "unknown" | null;
}

export default class GetCharactersUseCase {
  private _repository: ICharacterRepository;

  constructor(repository: ICharacterRepository) {
    this._repository = repository;
  }

  public async execute({ page, name, status }: IFilterParams) {
    const { characters, pages, count } = await this._repository.getCharacters({
      page,
      name,
      status,
    });
    const entitiesObj = characters.map((character) => character.toJSON());

    return {
      count,
      pages,
      characters: entitiesObj,
    };
  }
}
