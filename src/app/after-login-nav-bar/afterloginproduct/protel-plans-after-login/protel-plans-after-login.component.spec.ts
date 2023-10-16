import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtelPlansAfterLoginComponent } from './protel-plans-after-login.component';

describe('ProtelPlansAfterLoginComponent', () => {
  let component: ProtelPlansAfterLoginComponent;
  let fixture: ComponentFixture<ProtelPlansAfterLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtelPlansAfterLoginComponent]
    });
    fixture = TestBed.createComponent(ProtelPlansAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
