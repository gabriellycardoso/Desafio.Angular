import { TestBed } from '@angular/core/testing';

import { SalvarService } from './salvar.service';

describe('SalvarService', () => {
  let service: SalvarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalvarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
