import { TestBed } from '@angular/core/testing';

import { IrwifiafterloginserviceService } from './irwifiafterloginservice.service';

describe('IrwifiafterloginserviceService', () => {
  let service: IrwifiafterloginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrwifiafterloginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
