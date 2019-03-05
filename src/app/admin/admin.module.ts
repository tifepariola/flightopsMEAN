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
import { CrewComponent } from './crew/crew.component';
import { MovementsComponent } from './movements/movements.component';
import { MovementComponent } from './movement/movement.component';

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
  ],
  providers: [
    OnlyAdminUsersGuard
  ]})
export class AdminModule {}
