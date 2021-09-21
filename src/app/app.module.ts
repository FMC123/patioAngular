import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { ErrorComponent } from './error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from './menu/menu.module';
import { AppState } from './app-state.service';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CookieModule } from 'ngx-cookie';
import { PermissionModule } from './permission/permission.module';
import { UserAdministratorModule } from './user-administrator/user-administrator.module';
import { ParameterModule } from './parameter/parameter.module';
import { CompanyModule } from './company/company.module';
import { AccessTokenModule } from './access-token/access-token.module';
import { AreaModule } from './area/area.module';
import { CheckpointModule } from './checkpoint/checkpoint.module';
import { AccessMotiveModule } from './access-motive/access-motive.module';
import { CheckpointStatusModule } from './checkpoint-status/checkpoint-status.module';
import { MockModule } from './mock/mock.module';
import { DepartmentModule } from './department/department.module';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent, LayoutComponent, ErrorComponent, NotFoundComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    DashboardModule,
    routing,
    PermissionModule,
    UserModule,
    CompanyModule,
    AccessTokenModule,
    CheckpointModule,
    ParameterModule,
    AreaModule,
    CheckpointStatusModule,
    AccessMotiveModule,
    MockModule,
    DepartmentModule,
    UserAdministratorModule,
    CookieModule.forRoot(),
    // RouterModule.forRoot([]),
    AuthModule.forRoot(),
    MenuModule,
  ],
  providers: [AppState],
  bootstrap: [AppComponent]
})
export class AppModule { }
