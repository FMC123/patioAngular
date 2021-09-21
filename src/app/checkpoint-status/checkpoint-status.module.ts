import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CheckpointStatusDetailsComponent } from './checkpoint-status-details/checkpoint-status-list-details.component';
import { CheckpointStatusListInfoComponent } from './checkpoint-status-details/checkpoint-status-list-info-component';
import { CheckpointStatusChildrenListComponent } from './checkpoint-status-form/checkpoint-status-children-list.component';
import { CheckpointStatusFormComponent } from './checkpoint-status-form/checkpoint-status-form.component';
import { CheckpointStatusListComponent } from './checkpoint-status-list/checkpoint-status-list.component';
import { CheckpointStatusRoutingModule } from './checkpoint-status-routing.module';
import { CheckpointStatusService } from './checkpoint-status.service';

@NgModule({
  imports: [
    SharedModule,
    CheckpointStatusRoutingModule,
  ],
  declarations: [
    CheckpointStatusChildrenListComponent,
    CheckpointStatusFormComponent,
    CheckpointStatusListComponent,
    CheckpointStatusListInfoComponent,
    CheckpointStatusDetailsComponent
  ],
  exports: [
    CheckpointStatusFormComponent
  ],
  providers: [
    CheckpointStatusService,
  ]
})
export class CheckpointStatusModule { }
