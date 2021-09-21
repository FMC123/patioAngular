import { Response } from '@angular/http';
// import { PhysicalStockService } from '../report/physical-stock/physical-stock.service';
// import { GlobalBatchesService } from '../report/global-batches/global-batches.service';
import { AuthService } from './../auth/auth.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../assets/css/sementes.css']
})
export class MenuComponent implements OnInit {
  loading = false;
  personPermission: boolean = false;
  collaboratorPermission: boolean = false;
  warehousePermission: boolean = false;
  servicePermission: boolean = false;
  variablesPermission: boolean = false;

  @Input() sidebar;


  constructor(
    public auth: AuthService,
    // private physicalStockService: PhysicalStockService,
    // private globalBatchesService: GlobalBatchesService
  ) { }

  ngOnInit() {
    this.showPerson();
    this.showCollaborator();
    this.showWarehouse();
    this.showService();
    this.showVariables();
  }

  physicalStock() {
    this.loading = true;
    // this.physicalStockService.find();
    // this.physicalStockService.findCsv();
    this.loading = false;
  }

  globalBagsReport() {
    this.loading = true;
    // this.physicalStockService.globalBagsReport();
    this.loading = false;
  }

  globalBatchesReport() {
    this.loading = true;
    // this.globalBatchesService.globalBatchesReport();
    this.loading = false;
  }

  setSubMenu(menuLink: string, subMenuLink: string) {
    this.sidebar.menu = menuLink;
    this.sidebar.subMenu = subMenuLink;
    this.sidebar.menuOpened = {
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
      menuAssignExit: false,
    };
    this.sidebar.menuOpened[menuLink] = true;
  }

  showPerson(){
    this.personPermission = (this.auth.hasPermission('WAREHOUSE_STAKEHOLDER') ||
      this.auth.hasPermission('CARRIER') ||
      this.auth.hasPermission('PERSON') );
  }

  showCollaborator(){
    this.collaboratorPermission = (this.auth.hasPermission('COLLABORATOR') ||
      this.auth.hasPermission('FARM') ||
      this.auth.hasPermission('COLLABORATOR_PROPERTY') ||
      this.auth.hasPermission('ECONOMIC_GROUP'));
  }

  showWarehouse(){
    this.warehousePermission = (this.auth.hasPermission('WAREHOUSE') ||
      this.auth.hasPermission('POSITION_LAYER') ||
      this.auth.hasPermission('SCALE') ||
      this.auth.hasPermission('FORKLIFT') ||
      this.auth.hasPermission('PACK_TYPE') ||
      this.auth.hasPermission('CERTIFICATE') ||
      this.auth.hasPermission('SKU'));
  }

  showService(){
    this.servicePermission = (this.auth.hasPermission('OPERATION_TYPE') ||
      this.auth.hasPermission('SERVICE_GROUP') ||
      this.auth.hasPermission('ITEM') ||
      this.auth.hasPermission('SERVICE_INSTRUCTION_TYPE'));
  }

  showVariables(){
    this.variablesPermission = (this.auth.hasPermission('DRINK') ||
      this.auth.hasPermission('CULTIVATION') ||
      this.auth.hasPermission('HARVEST_SEASON') ||
      this.auth.hasPermission('GROW_CROP') ||
      this.auth.hasPermission('STRAINER'));
  }
}
