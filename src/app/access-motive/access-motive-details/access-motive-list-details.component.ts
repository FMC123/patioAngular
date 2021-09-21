import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../../shared/notification/notification';
import {AccessMotive} from '../access-motive';
import {AccessMotiveService} from '../access-motive.service';

@Component({
  selector: 'app-access-motive-list-details',
  templateUrl: './access-motive-list-details.component.html'
})
export class AccessMotiveDetailsComponent implements OnInit {
  accessMotive: AccessMotive;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    Notification.clearErrors();
    this.route.data.forEach((data: {accessMotive: AccessMotive}) => {
      this.accessMotive = data.accessMotive;
    });
  }

}
