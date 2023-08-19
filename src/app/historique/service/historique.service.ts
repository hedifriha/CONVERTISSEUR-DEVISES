import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Conversion } from '../model/conversion.model';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueService {
  private historique: Conversion[] = [];
  private historiqueSubject: BehaviorSubject<Conversion[]> = new BehaviorSubject<Conversion[]>([]);

  constructor() {}

  ajouterConversion(conversion: Conversion) {
   if(conversion.montantCalcule > 0)
    this.historique.unshift(conversion);
    this.historiqueSubject.next(this.historique);
  }

  getHistorique(): Observable<Conversion[]> {
    return this.historiqueSubject.asObservable();
  }
}

