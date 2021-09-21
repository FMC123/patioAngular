import { ModalManager } from '../../shared/modals/modal-manager';
import { AccessMotive } from '../access-motive';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-motive-list-info',
  templateUrl: './access-motive-list-info.component.html'
})
export class AccessMotiveListInfoComponent implements OnInit {
  @Input() accessMotive: AccessMotive;

  logModal: ModalManager = new ModalManager();

  leftColumn: Array<any>;

  ngOnInit() {
    this.leftColumn = [
      ['Nome Motivo de Acesso' , this.accessMotive.name],
      // ['Descricao Motivo de Acesso' , this.accessMotive.description],

    ];

  }
}
