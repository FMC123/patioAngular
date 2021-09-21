import { PermissionDetailComponent } from './permission-detail/permission-detail.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionService } from './permission.service';
import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { PermissionFormComponent } from './permission-form-component';
import { PermissionRoutingModule } from './permission-routing.module';
// import { PermissionFormResolve } from './permission-form-resolve';

@NgModule({

  imports: [
    SharedModule, PermissionRoutingModule
  ],

  declarations: [
    PermissionListComponent, PermissionFormComponent, PermissionDetailComponent
  ],
  providers: [PermissionService],
})

export class PermissionModule { }
