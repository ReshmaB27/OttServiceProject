import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InFlightafterloginComponent } from './in-flightafterlogin.component';

describe('InFlightafterloginComponent', () => {
  let component: InFlightafterloginComponent;
  let fixture: ComponentFixture<InFlightafterloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InFlightafterloginComponent]
    });
    fixture = TestBed.createComponent(InFlightafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
