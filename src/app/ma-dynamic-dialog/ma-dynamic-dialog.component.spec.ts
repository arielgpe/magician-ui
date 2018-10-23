import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaDynamicDialogComponent} from "./ma-dynamic-dialog.component";
import {MaDialogComponent} from "../ma-dialog/ma-dialog.component";
import {MaDialogDirective} from "../ma-dialog/directives/ma-dialog.directive";
import {MaDialogService} from "./ma-dialog-service";


describe('MaDynamicDialogComponent', () => {
  let component: MaDynamicDialogComponent;
  let fixture: ComponentFixture<MaDynamicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaDynamicDialogComponent, MaDialogComponent, MaDialogDirective],
      providers: [MaDialogService]
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
