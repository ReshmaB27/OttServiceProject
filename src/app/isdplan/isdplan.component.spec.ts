import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ISDplanComponent } from './isdplan.component';

describe('ISDplanComponent', () => {
  let component: ISDplanComponent;
  let fixture: ComponentFixture<ISDplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ISDplanComponent]
    });
    fixture = TestBed.createComponent(ISDplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
