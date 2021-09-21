import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


import { AreaFormResolve } from './area-form/area-form-resolve.service';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { AreaDetailsComponent } from './area-details/area-list-details.component';
import { AuthGuard } from '../auth/auth.guard';
import { LayoutComponent } from '../layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'area',
        component: LayoutComponent,
        canActivateChild: [ AuthGuard ],
        children: [
          {
            path: 'new',
            component: AreaFormComponent,
            resolve: {
              area: AreaFormResolve
            }
          },
          {
            path: 'edit/:id',
            component: AreaFormComponent,
            resolve: {
              area: AreaFormResolve
            }
          },
          {
            path: ':id',
            component: AreaDetailsComponent,
            resolve: {
              area: AreaFormResolve
            }
          },

          {
            path: '',
            component: AreaListComponent
          }
        ]
      }
    ])
  ],
  providers: [
    AreaFormResolve,
    //AreaDetailsResolve,
  ],
  exports: [
    RouterModule
  ]
})
export  class AreaRoutingModule { }
