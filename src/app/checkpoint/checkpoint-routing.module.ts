import { CheckpointDetailsResolve } from './checkpoint-list-detail/checkpoint-list-details-resolve.service';

import { CheckpointDetailsComponent } from './checkpoint-list-detail/checkpoint-list-details.component';
import { CheckpointFormResolve } from './checkpoint-form/checkpoint-form-resolve.service';
import { CheckpointFormComponent } from './checkpoint-form/checkpoint-form.component';
import { CheckpointListComponent } from './checkpoint-list/checkpoint-list.component';
import { AuthGuard } from '../auth/auth.guard';
import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'checkpoint',
        component: LayoutComponent,
        canActivateChild: [ AuthGuard ],
        children: [
          {
            path: 'new',
            component: CheckpointFormComponent,
            resolve: {
              serviceGroup: CheckpointFormResolve
            }
          },
          {
            path: 'edit/:id',
            component: CheckpointFormComponent,
            resolve: {
              serviceGroup: CheckpointFormResolve
            }
          },
          {
            path: ':id',
            component: CheckpointDetailsComponent,
            resolve: {
              serviceGroup: CheckpointFormResolve
            }
          },
          {
            path: '',
            component: CheckpointListComponent
          }
        ]
      }
    ])
  ],
  providers: [
    CheckpointFormResolve
  ],
  exports: [
    RouterModule
  ]
})
export class CheckpointRoutingModule { }
