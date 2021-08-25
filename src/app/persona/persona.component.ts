import { Component, OnInit } from '@angular/core';

import { PersonaService } from './persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService]
})
export class PersonaComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

}
