import ICharacterRepository from "../Repositories/ICharacterRepository";

type GetCharactersProps = {
  page: number;
  filter: {
    name?: string;
    status?: "alive" | "dead" | "unknown" | null;
  };
};

export default class GetCharactersUseCase {
  private _repository: ICharacterRepository;

  constructor(repository: ICharacterRepository) {
    this._repository = repository;
  }

  public async execute({ page, filter: { name, status } }: GetCharactersProps) {
    const { characters, pages } = await this._repository.getCharacters({
      page,
      filter: {
        name,
        status,
      },
    });
    const entitiesObj = characters.map((character) => character.toJSON());

    return {
      pages,
      characters: entitiesObj,
    };
  }
}
