import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtelplansComponent } from './protelplans.component';

describe('ProtelplansComponent', () => {
  let component: ProtelplansComponent;
  let fixture: ComponentFixture<ProtelplansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtelplansComponent]
    });
    fixture = TestBed.createComponent(ProtelplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
