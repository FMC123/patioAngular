import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


import { MockListComponent } from './mock-list/mock-list.component';
import { MockDetailsComponent } from './mock-details/mock-list-details.component';
import { AuthGuard } from '../auth/auth.guard';
import { LayoutComponent } from '../layout/layout.component';
import { MockDetailsResolve } from './mock-details/mock-list-details-resolve.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'mock',
        component: LayoutComponent,
        canActivateChild: [ AuthGuard ],
        children: [
        //   {
        //     path: 'new',
        //     // component: MockFormComponent,
        //     resolve: {
        //       // mock: MockFormResolve
        //     }
        //   },
        //   {
        //     path: 'edit/:id',
        //     // component: MockFormComponent,
        //     resolve: {
        //       // mock: MockFormResolve
        //     }
        //   },
          {
            path: ':id',
            component: MockDetailsComponent,
            resolve: {
              mock: MockDetailsResolve
            }
          },

          {
            path: '',
            component: MockListComponent
          }
        ]
      }
    ])
  ],
  providers: [
    // MockFormResolve,
    MockDetailsResolve,
  ],
  exports: [
    RouterModule
  ]
})
export  class MockRoutingModule { }
