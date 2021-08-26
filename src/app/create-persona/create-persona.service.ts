import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PersonaModel } from './../model/persona.model';
import { RestResponse } from './../model/restResponse.model';

@Injectable({
  providedIn: 'root'
})
export class CreatePersonaService {

  constructor(private http: HttpClient) { }

  /**
   * Metodo que valida campos obligatorios
   * @param persona
   */
  public validate(persona: PersonaModel): boolean {
    let isValid = true;

    if(!persona.nombre) {
      isValid = false;
    }
    if(!persona.apellido) {
      isValid = false;
    }
    if(!persona.username) {
      isValid = false;
    }
    return isValid;
  }
  public saveOrUpdate(persona: PersonaModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate", JSON.stringify(persona));
  }
}
