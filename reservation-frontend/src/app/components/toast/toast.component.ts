import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast/toast.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports: [CommonModule],
  template: `
    @if (toastService.message()) {
      <div class="toast-wrapper">
        <div class="toast-card">
          <div class="toast-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div class="toast-content">
            <span class="toast-title">Ocurrió un inconveniente</span>
            <span class="toast-message">{{ toastService.message() }}</span>
          </div>
        </div>
      </div>
    }
  `,
  styles: [`
    .toast-wrapper {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      animation: slideIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    .toast-card {
      display: flex;
      align-items: center;
      gap: 16px;
      background-color: rgba(28, 25, 23, 0.85);
      border: 1px solid rgba(239, 68, 68, 0.25);
      backdrop-filter: blur(16px);
      padding: 16px 20px;
      border-radius: 16px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5), 0 0 40px rgba(239, 68, 68, 0.1);
      max-width: 380px;
    }

    .toast-icon {
      color: #f87171;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      background-color: rgba(239, 68, 68, 0.15);
      padding: 8px;
      border-radius: 10px;
    }

    .toast-content {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .toast-title {
      font-weight: 700;
      color: #ffffff;
      font-size: 0.9rem;
    }

    .toast-message {
      color: #cbd5e1;
      font-size: 0.85rem;
      font-weight: 500;
      line-height: 1.4;
    }

    @keyframes slideIn {
      from {
        transform: translateY(32px) scale(0.95);
        opacity: 0;
      }
      to {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
    }
  `]
})
export class ToastComponent {
  toastService = inject(ToastService);
}
