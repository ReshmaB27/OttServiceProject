import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterloginproductComponent } from './afterloginproduct.component';

describe('AfterloginproductComponent', () => {
  let component: AfterloginproductComponent;
  let fixture: ComponentFixture<AfterloginproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterloginproductComponent]
    });
    fixture = TestBed.createComponent(AfterloginproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
