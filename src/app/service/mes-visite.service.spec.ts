import { TestBed } from '@angular/core/testing';

import { MesVisiteService } from './mes-visite.service';

describe('MesVisiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MesVisiteService = TestBed.get(MesVisiteService);
    expect(service).toBeTruthy();
  });
});
