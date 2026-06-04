import { Routes } from '@angular/router';
import { ReservationsListComponent } from './components/reservations-list/reservations-list.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';

export const routes: Routes = [
    { path: '', component: ReservationsListComponent },
    { path: 'create', component: CreateReservationComponent }
];
