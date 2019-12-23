import { TestBed } from '@angular/core/testing';

import { SdaService } from './sda.service';

describe('SdaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SdaService = TestBed.get(SdaService);
    expect(service).toBeTruthy();
  });
});
