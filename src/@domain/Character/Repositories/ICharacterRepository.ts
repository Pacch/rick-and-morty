import CharacterInfoEntity from "../Entities/CharacterInfoEntity";

export default interface IPokemonRepository {
  getCharacters(): Promise<CharacterInfoEntity[]>;
}
