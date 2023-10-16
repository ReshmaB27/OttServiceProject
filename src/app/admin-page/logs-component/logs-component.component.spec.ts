import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsComponentComponent } from './logs-component.component';

describe('LogsComponentComponent', () => {
  let component: LogsComponentComponent;
  let fixture: ComponentFixture<LogsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogsComponentComponent]
    });
    fixture = TestBed.createComponent(LogsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
