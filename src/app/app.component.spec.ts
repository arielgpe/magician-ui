import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AgSimpleDialogComponent} from "./ag-simple-dialog/ag-simple-dialog.component";
import {AgSimpleDialogDirective} from "./ag-simple-dialog/directives/ag-simple-dialog.directive";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AgSimpleDialogComponent,
        AgSimpleDialogDirective
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
