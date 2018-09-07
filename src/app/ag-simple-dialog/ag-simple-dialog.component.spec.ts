import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSimpleDialogComponent } from './ag-simple-dialog.component';

describe('AgSimpleDialogComponent', () => {
  let component: AgSimpleDialogComponent;
  let fixture: ComponentFixture<AgSimpleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgSimpleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSimpleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
