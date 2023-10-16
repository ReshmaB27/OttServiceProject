import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntRoamingComponent } from './int-roaming.component';

describe('IntRoamingComponent', () => {
  let component: IntRoamingComponent;
  let fixture: ComponentFixture<IntRoamingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntRoamingComponent]
    });
    fixture = TestBed.createComponent(IntRoamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
