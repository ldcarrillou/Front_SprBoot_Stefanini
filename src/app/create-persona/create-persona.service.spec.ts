import { TestBed } from '@angular/core/testing';

import { CreatePersonaService } from './create-persona.service';

describe('CreatePersonaService', () => {
  let service: CreatePersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatePersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
