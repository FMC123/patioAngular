import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AccessMotiveDetailsComponent } from './access-motive-details/access-motive-list-details.component';
import { AccessMotiveListInfoComponent } from './access-motive-details/access-motive-list-info-component';
import { AccessMotiveChildrenListComponent } from './access-motive-form/access-motive-children-list.component';
import { AccessMotiveFormComponent } from './access-motive-form/access-motive-form.component';
import { AccessMotiveListComponent } from './access-motive-list/access-motive-list.component';
import { AccessMotiveRoutingModule } from './access-motive-routing.module';
import { AccessMotiveService } from './access-motive.service';

@NgModule({
  imports: [
    SharedModule,
    AccessMotiveRoutingModule,
  ],
  declarations: [
    AccessMotiveChildrenListComponent,
    AccessMotiveFormComponent,
    AccessMotiveListComponent,
    AccessMotiveListInfoComponent,
    AccessMotiveDetailsComponent
  ],
  providers: [
    AccessMotiveService,
  ]
})
export class AccessMotiveModule { }
