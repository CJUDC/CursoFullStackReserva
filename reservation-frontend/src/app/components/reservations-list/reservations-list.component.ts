import { Component, inject, OnInit, signal } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { ReservationResponse } from '../../models/reservation.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reservations-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.css']
})
export class ReservationsListComponent implements OnInit {
  private reservationService = inject(ReservationService);
  reservations = signal<ReservationResponse[]>([]);

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getAllReservations().subscribe({
      next: (data) => this.reservations.set(data),
      error: (err) => console.error('Error loading reservations', err)
    });
  }

  cancel(id: number) {
    this.reservationService.cancelReservation(id).subscribe({
      next: () => this.loadReservations(),
      error: (err) => console.error('Error canceling reservation', err)
    });
  }
}
