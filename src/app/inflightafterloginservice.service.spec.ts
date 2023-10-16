import { TestBed } from '@angular/core/testing';

import { InflightafterloginserviceService } from './inflightafterloginservice.service';

describe('InflightafterloginserviceService', () => {
  let service: InflightafterloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InflightafterloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
