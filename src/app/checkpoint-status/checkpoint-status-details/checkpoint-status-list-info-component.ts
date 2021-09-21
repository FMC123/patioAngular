import { ModalManager } from '../../shared/modals/modal-manager';
import { CheckpointStatus } from '../checkpoint-status';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkpoint-status-list-info',
  templateUrl: './checkpoint-status-list-info.component.html'
})
export class CheckpointStatusListInfoComponent implements OnInit {
  @Input() checkpointStatus: CheckpointStatus;

  logModal: ModalManager = new ModalManager();

  leftColumn: Array<any>;

  ngOnInit() {
    this.leftColumn = [
      ['Nome Status Ponto de Controle' , this.checkpointStatus.name],
    ];

  }
}
