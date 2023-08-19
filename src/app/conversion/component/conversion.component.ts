import { Component, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';
import { Conversion } from 'src/app/historique/model/conversion.model';
import { HistoriqueService } from 'src/app/historique/service/historique.service';
import { TauxChangeService } from 'src/app/taux-change/service/taux-change.service';


@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {
  montantEUR: number = 0;
  montantUSD: number = 0;
  tauxChange: number = 0;
  switchMode: 'EUR' | 'USD' = 'EUR';
  tauxFixe: number | null = null;
  nouveauTauxFixe: number | null = null;


  constructor(private tauxChangeService: TauxChangeService,     private historiqueService: HistoriqueService    ) {}

  ngOnInit(): void {
    interval(3000)
    .pipe(take(Infinity))
    .subscribe(() => {
      this.tauxChange = this.tauxChangeService.getTauxChange();
    });
    this.updateMontants();
  }




  onMontantChange(): void {
    this.updateMontants();
  }

  onSwitchModeChange(mode: 'EUR' | 'USD'): void {
    this.switchMode = mode;
    this.updateMontants();
  }

  onTauxFixeChange(): void {
    this.tauxFixe = this.nouveauTauxFixe;
    this.updateMontants();
  }

  private updateMontants(): void {
    console.log(this.switchMode);
    if (this.switchMode === 'EUR') {
      this.montantUSD = this.montantEUR * (this.tauxFixe || this.tauxChange);
    } else {
      this.montantEUR = this.montantUSD /  (this.tauxFixe || this.tauxChange);
    }
    const conversion: Conversion = {
      tauxReel: this.tauxChange,
      tauxSaisi: this.tauxFixe || this.tauxChange,
      montantInitial: this.switchMode === 'EUR' ? this.montantEUR : this.montantUSD,
      montantCalcule: this.switchMode === 'USD' ? this.montantUSD : this.montantEUR,
      devise: this.switchMode === 'EUR' ? 'USD' : 'EUR'
    };
    this.historiqueService.ajouterConversion(conversion);
  }
}
