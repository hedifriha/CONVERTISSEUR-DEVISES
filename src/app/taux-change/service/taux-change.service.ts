import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TauxChangeService {
  private tauxChange: number = 1.1;
  private tauxFixe: number | null = null;

  constructor() {
    this.startPolling();
  }

  private startPolling(): void {
    setInterval(() => {
      const variation = (Math.random() * 0.1) - 0.05;
      this.tauxChange = this.tauxChange + variation;
    }, 3000);
  }

  getTauxChange(): number {
    if (this.tauxFixe !== null) {
      return this.tauxFixe;
    }
    return this.tauxChange;
  }

}
