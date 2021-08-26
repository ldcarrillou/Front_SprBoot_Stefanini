import { PersonaModel } from './../model/persona.model';
import { Component, OnInit } from '@angular/core';

import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

  public personas: Array<PersonaModel>;
  constructor(private personaService: PersonaService) { }

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
}
