import { CheckpointStatusModule } from './../checkpoint-status/checkpoint-status.module';
import { NgModule } from '@angular/core';

// import { CheckpointItemListComponent } from '../checkpoint-items/checkpoint-item-list/checkpoint-item-list.component';
import { CheckpointService } from './checkpoint.service';
import { SharedModule } from '../shared/shared.module';
import { CheckpointFormComponent } from './checkpoint-form/checkpoint-form.component';
import { CheckpointDetailsComponent } from './checkpoint-list-detail/checkpoint-list-details.component';
import { CheckpointListInfoComponent } from './checkpoint-list-detail/checkpoint-list-info.component';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { CheckpointRoutingModule } from './checkpoint-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CheckpointRoutingModule,
    CheckpointStatusModule,
  ],
  exports: [
    // CheckpointItemListComponent
  ],
  declarations: [
    CheckpointDetailsComponent,
    CheckpointListInfoComponent,
    CheckpointListComponent,
    CheckpointFormComponent,
    // CheckpointItemListComponent
  ],
  providers: [
    CheckpointService,
  ]
})
export class CheckpointModule { }
