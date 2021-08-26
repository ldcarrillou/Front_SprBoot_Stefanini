import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonaModel } from './../model/persona.model';
import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

  public personas: Array<PersonaModel>;
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit() {
    this.loadPersonas();
  }

  private loadPersonas(): void {
    /*console.log(this.personaService.getPersonas());*/
    this.personaService.getPersonas().subscribe(res => {
      this.personas = res;
      console.log(res);
    });
  }

  public edit(persona: PersonaModel): void {
    sessionStorage.setItem('persona', JSON.stringify(persona));
    this.router.navigate(['/createPersonaComponent']);
  }
  public delete(persona: PersonaModel): void {
    if(confirm("¿Está seguro de borrar el registro?")) {
      this.personaService.delete(persona);
    }
  }
}
