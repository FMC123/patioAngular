import { CheckpointService } from '../checkpoint.service';
import { Checkpoint } from '../checkpoint';
import { ModalManager } from '../../shared/modals/modal-manager';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../../shared/notification/notification';

@Component({
  selector: 'app-checkpoint-list-details',
  templateUrl: './checkpoint-list-details.component.html'
})
export class CheckpointDetailsComponent implements OnInit {
  serviceGroup: Checkpoint;

  constructor(private route: ActivatedRoute,
              private serviceGroupService: CheckpointService) { }

  ngOnInit() {
    Notification.clearErrors();
    this.route.data.forEach((data: {serviceGroup: Checkpoint}) => {
      this.serviceGroup = data.serviceGroup;
    });
  }

}
