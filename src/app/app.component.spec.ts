import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {MaDialogComponent} from "./ma-dialog/ma-dialog.component";
import {MaDialogDirective} from "./ma-dialog/directives/ma-dialog.directive";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MaDialogComponent,
        MaDialogDirective
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
