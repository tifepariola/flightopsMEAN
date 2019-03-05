import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AircraftComponent } from './aircraft/aircraft.component';
import { CrewsComponent } from './crews/crews.component';
import { CrewComponent } from './crew/crew.component';
import { MovementsComponent } from './movements/movements.component';
import { MovementComponent } from './movement/movement.component';

const routes: Routes = [{
  path: 'admin',
  canActivate: [OnlyAdminUsersGuard],
  children: [{
    path: '',
    component: AdminComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'aircrafts',
    component: AircraftsComponent
  },
  {
    path: 'aircraft',
    component: AircraftComponent
  },
  {
    path: 'crews',
    component: CrewsComponent
  },
  {
    path: 'crew',
    component: CrewComponent
  },
  {
    path: 'movements',
    component: MovementsComponent
  },
  {
    path: 'movement',
    component: MovementComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
