interface IConfig {
  [key: string]: string | any;
}

export default class Config {
  private _config: IConfig;
  constructor() {
    this._config = {
      API_HOST: process.env.REACT_APP_RICK_AND_MORTY_API || "",
    };
  }

  public get(key: string) {
    return this._config[key];
  }
}
