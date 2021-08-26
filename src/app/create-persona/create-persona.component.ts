import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OK } from './../model/httpstatus';
import { PersonaModel } from '../model/persona.model';
import { CreatePersonaService } from './create-persona.service';

@Component({
  selector: 'app-create-persona',
  templateUrl: './create-persona.component.html',
  styleUrls: ['./create-persona.component.css'],
  providers: [CreatePersonaService]
})
export class CreatePersonaComponent implements OnInit {

  public persona: PersonaModel;
  public isValid: boolean = true;
  private message: string = "";

  constructor(private createPersonaService: CreatePersonaService,
    private router: Router) {
    this.persona = new PersonaModel();
  }

  ngOnInit(): void {
  }

  public saveOrUpdate(): void {
    this.isValid = this.createPersonaService.validate(this.persona);

    if(this.isValid) {
      this.createPersonaService.saveOrUpdate(this.persona).subscribe((res: { responseCode: number; message: string; }) => {
        if(res.responseCode == OK) {
          this.router.navigate(['/personaComponent']);
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.message = "Los campos con * son obligatorios";
    }
  }

}
