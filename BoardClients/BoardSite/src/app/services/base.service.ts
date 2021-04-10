export class BaseService {

  private baseUrl: string;

  constructor(controllerName: string) {
    this.baseUrl = `http://localhost:50543/api/${controllerName}`;
  }

  protected buildUrl(path: string): string {
    if (path === undefined || path === "") {
      return this.baseUrl;
    } else {
      return `${this.baseUrl}/${path}`;
    }
  }
}
