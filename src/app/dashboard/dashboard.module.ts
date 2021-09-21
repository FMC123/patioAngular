import { NgModule } from '@angular/core';

import { routing } from './dashboard.routing';
import { SharedModule } from './../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { StockPanelModule } from './stock-panel/stock-panel.module';

@NgModule({
	imports: [SharedModule, StockPanelModule, routing],
	exports: [],
	declarations: [DashboardComponent],
	providers: []
})
export class DashboardModule {}
