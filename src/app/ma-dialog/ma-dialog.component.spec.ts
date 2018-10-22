import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaDialogComponent } from './ma-dialog.component';
import {MaDialogDirective} from "./directives/ma-dialog.directive";
import {utf8Encode} from "@angular/compiler/src/util";

describe('MaDialogComponent', () => {
  let dialogComponent: MaDialogComponent;
  let fixture: ComponentFixture<MaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaDialogComponent, MaDialogDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaDialogComponent);
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
