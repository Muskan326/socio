import { TestBed } from '@angular/core/testing';

import { SociopoolService } from './sociopool.service';

describe('SociopoolService', () => {
  let service: SociopoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SociopoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
