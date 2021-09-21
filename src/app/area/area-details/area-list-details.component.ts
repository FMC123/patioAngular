import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notification } from '../../shared/notification/notification';
import {Area} from '../area';
import {AreaService} from '../area.service';

@Component({
  selector: 'app-area-list-details',
  templateUrl: './area-list-details.component.html'
})
export class AreaDetailsComponent implements OnInit {
  area: Area;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    Notification.clearErrors();
    this.route.data.forEach((data: {area: Area}) => {
      this.area = data.area;
    });
  }

}
