import { Component, OnInit } from '@angular/core';
import { HistoriqueService } from '../service/historique.service';
import { Conversion } from '../model/conversion.model';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  historique: Conversion[] = [];

  constructor(private historiqueService: HistoriqueService) {}

  ngOnInit(): void {
    this.historiqueService.getHistorique().subscribe((historique) => {
      this.historique = historique;
    });
  }
}
