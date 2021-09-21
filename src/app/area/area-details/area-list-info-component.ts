import { ModalManager } from '../../shared/modals/modal-manager';
import { Area } from '../area';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-list-info',
  templateUrl: './area-list-info.component.html'
})
export class AreaListInfoComponent implements OnInit {
  @Input() area: Area;

  logModal: ModalManager = new ModalManager();

  leftColumn: Array<any>;

  ngOnInit() {
    this.leftColumn = [
      ['Nome Área' , this.area.name],
      ['Descricao Área' , this.area.description],

    ];

  }
}
