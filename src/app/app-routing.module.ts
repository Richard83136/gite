import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ChambreAdulteComponent } from './chambre-adulte/chambre-adulte.component';
import { ChambreAdulte1Component } from './chambre-adulte1/chambre-adulte1.component';
import { ChambreEnfantComponent } from './chambre-enfant/chambre-enfant.component';
import { CuisineComponent } from './cuisine/cuisine.component';
import { ExterieurComponent } from './exterieur/exterieur.component';
import { InformationComponent } from './information/information.component';
import { SalonComponent } from './salon/salon.component';
import { TarifsComponent } from './tarifs/tarifs.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent },
  {path: 'salon', component: SalonComponent},
  {path: 'cuisine', component: CuisineComponent },
  {path: 'chambre_adulte', component: ChambreAdulteComponent },
  {path: 'chambre_adulte_1', component: ChambreAdulte1Component },
  {path: 'chambre_enfant', component: ChambreEnfantComponent},
  {path: 'exterieur', component: ExterieurComponent},
  {path: 'tarifs', component: TarifsComponent},
  {path: 'information', component: InformationComponent},
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path:'**', redirectTo: 'accueil'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
