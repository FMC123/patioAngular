import { environment } from "src/environments/environment";
//import { environment } from "src/environments/environment.dev";

export class Endpoints {

  static userUrl = `${environment.API_URL}/api/user`;
  static loggedUserURL: string = `${environment.API_URL}/api/logged-user/`;
  static aboutUrl = `${environment.API_URL}/api/public/about`;
  static userMenusURL: string = `${environment.API_URL}/api/user-menu`;
  static parametersUrl: string = `${environment.API_URL}/api/parameter`;
  static loginUrl: string = `${environment.API_URL}/api/public/login`;
  static userPasswordURL: string = `${environment.API_URL}/api/password`;
  static accessAccessTokenUrl = `${environment.API_URL}/api/access-token`;
  static automationSemaphoreUrl: string = `${environment.API_URL}/api/automation-semaphore`;
  static stockPanelUrl = `${environment.API_URL}/api/stock-panel`;
  static permissionUrl = `${environment.API_URL}/api/permission`;
  static userValidationLoginUrl = `${environment.API_URL}/api/user/validation/login-existence`;
  static userAutocompleteUrl = `${environment.API_URL}/api/user/autocomplete`;
  static departmentUrl: string = `${environment.API_URL}/api/department`;
  static companyURL = `${environment.API_URL}/api/company`;
  static areaURL = `${environment.API_URL}/api/area`;
  static checkpointURL = `${environment.API_URL}/api/checkpoint`;
  static accessMotiveURL = `${environment.API_URL}/api/reason-for-access`;
  static checkpointStatusURL = `${environment.API_URL}/api/checkpoint-status`;
  static integracaoMockURL = `${environment.API_URL}/api/integracao-mock`;
}
