import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taux-change',
  templateUrl: './taux-change.component.html',
  styleUrls: ['./taux-change.component.scss']
})
export class TauxChangeComponent implements OnInit {
  tauxChange: number = 1.1;
  tauxPersonnalise: number | null = null;

  constructor() { }

  ngOnInit(): void {
      setInterval(() => {
        if (this.tauxPersonnalise === null) {
          const variation = Math.random() * 0.1 - 0.05;
          const nouveauTaux = this.tauxChange + variation;
          if (Math.abs(nouveauTaux - this.tauxChange) <= 0.02) {
            this.tauxChange = nouveauTaux;
          }
        }
      }, 3000);
    }

}
