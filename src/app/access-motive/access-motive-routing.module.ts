import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


import { AccessMotiveFormResolve } from './access-motive-form/access-motive-form-resolve.service';
import { AccessMotiveListComponent } from './access-motive-list/access-motive-list.component';
import { AccessMotiveFormComponent } from './access-motive-form/access-motive-form.component';
import { AccessMotiveDetailsComponent } from './access-motive-details/access-motive-list-details.component';
import { AuthGuard } from '../auth/auth.guard';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'access-motive',
        component: LayoutComponent,
        canActivateChild: [ AuthGuard ],
        children: [
          {
            path: 'new',
            component: AccessMotiveFormComponent,
            resolve: {
              accessMotive: AccessMotiveFormResolve
            }
          },
          {
            path: 'edit/:id',
            component: AccessMotiveFormComponent,
            resolve: {
              accessMotive: AccessMotiveFormResolve
            }
          },
          {
            path: ':id',
            component: AccessMotiveDetailsComponent,
            resolve: {
              accessMotive: AccessMotiveFormResolve
            }
          },

          {
            path: '',
            component: AccessMotiveListComponent
          }
        ]
      }
    ])
  ],
  providers: [
    AccessMotiveFormResolve,
    //AccessMotiveDetailsResolve,
  ],
  exports: [
    RouterModule
  ]
})
export  class AccessMotiveRoutingModule { }
