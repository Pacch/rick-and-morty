export interface ICharacterInfoParams {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
}

export default class CharacterInfoEntity {
  private _id: string;
  private _name: string;
  private _species: string;
  private _status: string;
  private _image: string;

  constructor(params: ICharacterInfoParams) {
    this._id = params.id;
    this._name = params.name;
    this._species = params.species;
    this._status = params.status;
    this._image = params.image;
  }

  public toJSON() {
    return {
      id: this._id,
      name: this._name,
      species: this._species,
      status: this._status,
      image: this._image,
    };
  }
}
