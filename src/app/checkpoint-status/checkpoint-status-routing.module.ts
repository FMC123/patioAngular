import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


import { CheckpointStatusFormResolve } from './checkpoint-status-form/checkpoint-status-form-resolve.service';
import { CheckpointStatusListComponent } from './checkpoint-status-list/checkpoint-status-list.component';
import { CheckpointStatusFormComponent } from './checkpoint-status-form/checkpoint-status-form.component';
import { CheckpointStatusDetailsComponent } from './checkpoint-status-details/checkpoint-status-list-details.component';
import { AuthGuard } from '../auth/auth.guard';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'checkpoint-status',
        component: LayoutComponent,
        canActivateChild: [ AuthGuard ],
        children: [
          {
            path: 'new',
            component: CheckpointStatusFormComponent,
            resolve: {
              checkpointStatus: CheckpointStatusFormResolve
            }
          },
          {
            path: 'edit/:id',
            component: CheckpointStatusFormComponent,
            resolve: {
              checkpointStatus: CheckpointStatusFormResolve
            }
          },
          {
            path: ':id',
            component: CheckpointStatusDetailsComponent,
            resolve: {
              checkpointStatus: CheckpointStatusFormResolve
            }
          },

          {
            path: '',
            component: CheckpointStatusListComponent
          }
        ]
      }
    ])
  ],
  providers: [
    CheckpointStatusFormResolve,
    //CheckpointStatusDetailsResolve,
  ],
  exports: [
    RouterModule
  ]
})
export  class CheckpointStatusRoutingModule { }
