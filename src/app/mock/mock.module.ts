import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MockDetailsResolve } from './mock-details/mock-list-details-resolve.service';
import { MockDetailsComponent } from './mock-details/mock-list-details.component';
import { MockListInfoComponent } from './mock-details/mock-list-info-component';
import { MockListComponent } from './mock-list/mock-list.component';
import { MockRoutingModule } from './mock-routing.module';
import { MockService } from './mock.service';

@NgModule({
  imports: [
    SharedModule,
    MockRoutingModule,
  ],
  declarations: [
    MockListComponent,
    MockListInfoComponent,
    MockDetailsComponent
  ],
  providers: [
    MockService,
    MockDetailsResolve,
  ]
})
export class MockModule { }
