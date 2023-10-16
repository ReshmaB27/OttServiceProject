import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IRWiFiComponent } from './irwi-fi.component';

describe('IRWiFiComponent', () => {
  let component: IRWiFiComponent;
  let fixture: ComponentFixture<IRWiFiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IRWiFiComponent]
    });
    fixture = TestBed.createComponent(IRWiFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
