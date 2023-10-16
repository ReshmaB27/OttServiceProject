import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterLoginNavBarComponent } from './after-login-nav-bar.component';

describe('AfterLoginNavBarComponent', () => {
  let component: AfterLoginNavBarComponent;
  let fixture: ComponentFixture<AfterLoginNavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterLoginNavBarComponent]
    });
    fixture = TestBed.createComponent(AfterLoginNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
