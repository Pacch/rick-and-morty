import CharacterInfoEntity from "../Entities/CharacterInfoEntity";

export default interface ICharacterRepository {
  getCharacters(params: {
    page: number;
    name?: string;
    status?: "alive" | "dead" | "unknown" | null;
  }): Promise<{
    count: number;
    pages: number;
    characters: CharacterInfoEntity[];
  }>;
}
