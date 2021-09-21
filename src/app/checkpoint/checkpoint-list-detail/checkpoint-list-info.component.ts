import { Checkpoint } from '../checkpoint';

import { ModalManager } from '../../shared/modals/modal-manager';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpoint-list-info',
  templateUrl: './checkpoint-list-info.component.html'
})
export class CheckpointListInfoComponent implements OnInit {
  @Input() serviceGroup: Checkpoint;

  logModal: ModalManager = new ModalManager();

  leftColumn: Array<any>;

  ngOnInit() {
    this.leftColumn = [
      ['Código', this.serviceGroup.name],
      ['Descrição', this.serviceGroup.description],
      ['Agrupar para Calculo', this.serviceGroup.containerStacking? 'Sim': 'Não'],
      ['Agrupar para Calculo', this.serviceGroup.containerWithdrawal? 'Sim': 'Não'],
      ['Agrupar para Calculo', this.serviceGroup.containerSeal? 'Sim': 'Não'],
      ['Agrupar para Calculo', this.serviceGroup.supervisor? 'Sim': 'Não'],
      ['Agrupar para Calculo', this.serviceGroup.alterMotacesso? 'Sim': 'Não'],
      ['Agrupar para Calculo', this.serviceGroup.vehicleRegister? 'Sim': 'Não'],
      ['Descrição', this.serviceGroup.checkpointTime],
      ['Descrição', this.serviceGroup.maxChrJustification],
    ];

  }
}
