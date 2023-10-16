import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrwiFiafterloginComponent } from './irwi-fiafterlogin.component';

describe('IrwiFiafterloginComponent', () => {
  let component: IrwiFiafterloginComponent;
  let fixture: ComponentFixture<IrwiFiafterloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IrwiFiafterloginComponent]
    });
    fixture = TestBed.createComponent(IrwiFiafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
