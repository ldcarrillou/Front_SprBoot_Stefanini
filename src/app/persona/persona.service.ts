import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PersonaModel } from './../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /*private personas: Array<PersonaModel>;*/
  constructor(private http: HttpClient) { }

  /*public getPersonas(): Array<PersonaModel> {*/
  public getPersonas(): Observable<PersonaModel[]> {
    return this.http.get<PersonaModel[]>("http://localhost:8080/getPersonas");
    /*this.http.get("http://localhost:8080/getPersonas").subscribe(res => {
      this.personas = res as PersonaModel[];
      console.log(this.personas);
    });*/
    }
    /*return this.personas;
  }*/
  public delete(persona: PersonaModel): void {
    this.http.post("http://localhost:8080/deletePersona", JSON.stringify(persona)).subscribe();
    location.reload();
    this.getPersonas();
  }
}
