import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {AgDialogComponent} from "./ag-dialog/ag-dialog.component";
import {AgSimpleDialogDirective} from "./ag-dialog/directives/ag-simple-dialog.directive";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AgDialogComponent,
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
