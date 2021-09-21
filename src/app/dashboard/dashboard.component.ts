import { Component, OnDestroy, OnInit } from '@angular/core';
import { Notification } from '../shared/notification/notification';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
	constructor() {}

	ngOnInit() {
		Notification.clearErrors();
	}
}
