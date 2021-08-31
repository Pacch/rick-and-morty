import CharacterInfoEntity from "../Entities/CharacterInfoEntity";

export default interface IPokemonRepository {
  getCharacters(params: {
    page: number;
    name?: string;
    status?: "alive" | "dead" | "unknown" | null;
  }): Promise<{ pages: number; characters: CharacterInfoEntity[] }>;
}
