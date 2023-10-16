import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsdafterloginComponent } from './isdafterlogin.component';

describe('IsdafterloginComponent', () => {
  let component: IsdafterloginComponent;
  let fixture: ComponentFixture<IsdafterloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IsdafterloginComponent]
    });
    fixture = TestBed.createComponent(IsdafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
