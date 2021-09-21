import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Notification } from '../../shared/notification/notification';
import {Mock} from '../mock';
import {MockService} from '../mock.service';
import { MockDetailsResolve } from './mock-list-details-resolve.service';

@Component({
  selector: 'app-mock-list-details',
  templateUrl: './mock-list-details.component.html'
})
export class MockDetailsComponent implements OnInit {
  mock: Mock;

  constructor(
    private route: ActivatedRoute,
    // private route: MockDetailsResolve,
    private mockService: MockService,
     ) { }

  ngOnInit() {
    Notification.clearErrors();
    // this.route.resolve()
    this.route.data.subscribe(
      (info) => {
        this.mock = info.mock;
        // console.log(info);
      }
    )
    // this.mockService.findPlaca(this.route.params['p_ds_placa']).then((res) => {
    //   this.mock = res;
    // })

    // .catch(error => this.handleError(error));
    // this.route.data.forEach((data: {mock: Mock}) => {
    //   console.log(data)
    //   this.mock = data.mock;
    // });
  }

}
