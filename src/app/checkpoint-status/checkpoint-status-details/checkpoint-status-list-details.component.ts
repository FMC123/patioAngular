import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../../shared/notification/notification';
import {CheckpointStatus} from '../checkpoint-status';
import {CheckpointStatusService} from '../checkpoint-status.service';

@Component({
  selector: 'app-checkpoint-status-list-details',
  templateUrl: './checkpoint-status-list-details.component.html'
})
export class CheckpointStatusDetailsComponent implements OnInit {
  checkpointStatus: CheckpointStatus;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    Notification.clearErrors();
    this.route.data.forEach((data: {checkpointStatus: CheckpointStatus}) => {
      this.checkpointStatus = data.checkpointStatus;
    });
  }

}
