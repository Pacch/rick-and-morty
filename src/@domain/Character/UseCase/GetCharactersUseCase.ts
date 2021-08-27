import ICharacterRepository from "../Repositories/ICharacterRepository";

export default class GetCharactersUseCase {
  private _repository: ICharacterRepository;

  constructor(repository: ICharacterRepository) {
    this._repository = repository;
  }

  public async execute() {
    const entities = await this._repository.getCharacters();
    const entitiesObj = entities.map((entity) => entity.toJSON());
    return entitiesObj;
  }
}
