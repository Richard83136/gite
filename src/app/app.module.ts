import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { SalonComponent } from './salon/salon.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { ChambreAdulteComponent } from './chambre-adulte/chambre-adulte.component';
import { ChambreEnfantComponent } from './chambre-enfant/chambre-enfant.component';
import { ExterieurComponent } from './exterieur/exterieur.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { ChambreAdulte1Component } from './chambre-adulte1/chambre-adulte1.component';
import { InformationComponent } from './information/information.component';






@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    SalonComponent,
    CuisineComponent,
    ChambreAdulteComponent,
    ChambreEnfantComponent,
    ExterieurComponent,
    TarifsComponent,
    ChambreAdulte1Component,
    InformationComponent




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
