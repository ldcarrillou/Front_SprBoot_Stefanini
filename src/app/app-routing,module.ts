import { CreatePersonaComponent } from './create-persona/create-persona.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  { path: '', redirectTo: '/personaComponent', pathMatch: 'full' },
  { path: 'appComponent', component: AppComponent },
  { path: 'personaComponent', component: PersonaComponent },
  { path: 'createPersonaComponent', component: CreatePersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
