import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgSimpleDialogComponent } from './ag-simple-dialog.component';
import {AgSimpleDialogDirective} from "./directives/ag-simple-dialog.directive";
import {utf8Encode} from "@angular/compiler/src/util";

describe('AgSimpleDialogComponent', () => {
  let dialogComponent: AgSimpleDialogComponent;
  let fixture: ComponentFixture<AgSimpleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgSimpleDialogComponent, AgSimpleDialogDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgSimpleDialogComponent);
    dialogComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(dialogComponent).toBeTruthy();
  });
  
  it("should display the dialog", () => {
    dialogComponent.visible = true;
    fixture.detectChanges();
    expect(dialogComponent.visible).toBeTruthy()
  });


  describe("closeModal", ()=> {

    it('should set dialog visibility to false', () => {
      expect(dialogComponent.visible).toBeFalsy()
    });

    it('should emit visibility change to holder component', () => {
      dialogComponent.visibleChange.subscribe(visible => {
        expect(visible).toBeFalsy()
      });
      dialogComponent.closeModal()
    });
  })
});
