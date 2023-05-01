import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  showNotification(arg0: { title: string; body: string; icon: string; }) {
    throw new Error('Method not implemented.');
  }
  requestPermission() {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
