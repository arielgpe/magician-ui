import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogUtilityComponent} from './dialog-utility.component';

describe('MaDynamicDialogComponent', () => {
  let component: DialogUtilityComponent;
  let fixture: ComponentFixture<DialogUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogUtilityComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
