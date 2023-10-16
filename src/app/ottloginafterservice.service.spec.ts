import { TestBed } from '@angular/core/testing';

import { OttloginafterserviceService } from './ottloginafterservice.service';

describe('OttloginafterserviceService', () => {
  let service: OttloginafterserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OttloginafterserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
