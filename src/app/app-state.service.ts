import { Injectable, NgZone } from '@angular/core';

@Injectable()
export class AppState {

  loading: boolean = false;
  menuVisible = true;
  data = {};
  sidebar = {
    menu: '',
    subMenu: '',
    menuOpened: {
      menuAdmin: false,
      menuUser: false,
      menuRegister: false,
      menuAutomation: false,
      menuShippingAuthorization: false,
      menuBalance: false,
      menuLobby: false,
      menuStock: false,
      menuClassification: false,
      menuPcp: false,
      menuMap: false,
      menuService: false,
      menuCharging: false,
      menuPurchase: false,
      menuReport: false,
      menuIntegration: false,
    }
  };

  constructor(private ngZone: NgZone) { }

  setLoading(loading: boolean) {
    this.ngZone.run(() => {
      this.loading = loading;
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  showMenu() {
    this.menuVisible = true;
  }

  hideMenu() {
    this.menuVisible = false;
  }

  setData(key: string, value: any) {
    this.data[key] = value;
  }

  getData(key: string): any {
    return this.data[key];
  }

  removeData(key: string) {
    delete this.data[key];
  }
}
