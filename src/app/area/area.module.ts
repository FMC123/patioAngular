import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AreaDetailsComponent } from './area-details/area-list-details.component';
import { AreaListInfoComponent } from './area-details/area-list-info-component';
import { AreaChildrenListComponent } from './area-form/area-children-list.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { AreaListComponent } from './area-list/area-list.component';
import { AreaRoutingModule } from './area-routing.module';
import { AreaService } from './area.service';

@NgModule({
  imports: [
    SharedModule,
    AreaRoutingModule,
  ],
  declarations: [
    AreaChildrenListComponent,
    AreaFormComponent,
    AreaListComponent,
    AreaListInfoComponent,
    AreaDetailsComponent
  ],
  providers: [
    AreaService,
  ]
})
export class AreaModule { }
