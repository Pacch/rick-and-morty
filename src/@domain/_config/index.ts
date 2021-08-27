interface IConfig {
  [key: string]: string | any;
}

export default class Config {
  private _config: IConfig;
  constructor() {
    this._config = {
      API_HOST: process.env.REACT_APP_ENDPOINT || "",
    };
  }

  public get(key: string) {
    return this._config[key];
  }
}
