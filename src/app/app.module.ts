import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoriqueComponent } from './historique/component/historique.component';
import { FormsModule } from '@angular/forms';
import { TauxChangeComponent } from './taux-change/component/taux-change.component';
import { ConversionComponent } from './conversion/component/conversion.component';

@NgModule({
  declarations: [
    AppComponent,
    TauxChangeComponent,
    ConversionComponent,
    HistoriqueComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
