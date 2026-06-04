import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { ToastService } from '../../services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reservation',
  imports: [ReactiveFormsModule],
  templateUrl: './create-reservation.component.html',
  styleUrls: ['./create-reservation.component.css']
})
export class CreateReservationComponent {
  private fb = inject(FormBuilder);
  private reservationService = inject(ReservationService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  services = ['Corte de pelo', 'Manicura', 'Masaje', 'Limpieza facial'];

  form: FormGroup = this.fb.group({
    customerName: ['', Validators.required],
    date: ['', Validators.required],
    time: ['', Validators.required],
    service: ['', Validators.required]
  });

  onSubmit() {
    if (this.form.valid) {
      this.reservationService.createReservation(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: () => {
          this.toastService.show('Error al guardar la reserva');
        }
      });
    } else {
      this.toastService.show('Por favor, rellena todos los campos');
    }
  }
}
