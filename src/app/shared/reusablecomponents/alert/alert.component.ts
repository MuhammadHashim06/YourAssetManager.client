import { Component, Input } from '@angular/core';
export interface Alert {
  type: 'success' | 'error' | 'info';
  message: string;
}
@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})

export class AlertComponent {

  @Input() alert: Alert | undefined;
}
