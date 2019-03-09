import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {OnlyAdminUsersGuard} from './admin-user-guard';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { CrewsComponent } from './crews/crews.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CrewComponent } from './crew/crew.component';
import { MovementsComponent } from './movements/movements.component';
import { MovementComponent } from './movement/movement.component';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';


@NgModule({
  declarations: [
    HeaderComponent,
    AdminComponent,
    SideNavComponent,
    DashboardComponent,
    AircraftsComponent,
    AircraftComponent,
    CrewsComponent,
    CrewComponent,
    MovementsComponent,
    MovementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    BrowserAnimationsModule,
    FlatpickrModule.forRoot(),
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    OnlyAdminUsersGuard
  ]})
export class AdminModule {}
