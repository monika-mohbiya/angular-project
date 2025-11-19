import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  selectedId = signal<number | null>(null);
  loading = signal(false);
  constructor() { }
  show() {
    this.loading.set(true);
  }

  hide() {
    this.loading.set(false);
  }
}