import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaDynamicDialogComponent} from "./ma-dynamic-dialog.component";


describe('MaDynamicDialogComponent', () => {
  let component: MaDynamicDialogComponent;
  let fixture: ComponentFixture<MaDynamicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaDynamicDialogComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaDynamicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
