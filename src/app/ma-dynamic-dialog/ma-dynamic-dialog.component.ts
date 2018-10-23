import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MaDialogService} from "./ma-dialog-service";

@Component({
  selector: 'ma-dynamic-dialog',
  templateUrl: './ma-dynamic-dialog.component.html',
  styleUrls: ['./ma-dynamic-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})

/**
 * @field showDialog   Used to show or hide the dialog, field should not be called from outside the class
 * @field title   Title of the Dialog to be shown.
 * @field btnAlign   Align the buttons to the left.
 * @field message   Message to be shown inside the dialog, supports HTML.
 * @field type    Displayed type of the dialog. Eg: Warning, Success or Alert. (in lowercase)
 * @field buttons   Array of buttons to be shown on the dialog, supports an action.
 * @field iconClass   Specified icon of the dialog. Default to 'fa-exclamation-circle'
 *
 * Example usage:
 *    this.dialogService.show({
      type: "success",
      title: "Dialog Message",
      btnAlign: "left",
      message: "Important Message comming tru <b>Test</b>",
      iconClass: 'fa-lock',
      buttons: [
        {
          title: 'Ok',
          cssClass: 'btn-verizon-primary',
          action: function(dialog){
            dialog.hide();
          }
        }
      ]
    });
 */

export class MaDynamicDialogComponent implements OnInit {

  showDialog: boolean = false;
  title: string = "";
  message: string = "";
  type: string;
  buttons = [];
  iconClass = 'fa-exclamation-circle';
  btnAlign:string = 'button-align-right';

  constructor(private dialogService: MaDialogService) {
  }

  ngOnInit() {
    this.dialogService.incomingDialogEvent.subscribe(event => {
      this.show();

      this.title = event.title;
      this.message = event.message;
      if (event.hasOwnProperty("type")) {
        this.type = event.type;
      } else {
        this.type = "";
      }

      if (event.hasOwnProperty("buttons")) {
        this.buttons = event.buttons;
      } else {
        this.buttons = [];
      }

      if (event.hasOwnProperty("iconClass")){
        this.iconClass = event.iconClass;
      } else {
        this.iconClass = 'fa-exclamation-circle';
      }
      if (event.hasOwnProperty("btnAlign")){
        this.btnAlign = 'button-align-'+ event.btnAlign;
      } else {
        this.btnAlign = 'button-align-right';
      }
    })
  }


  show() {
    this.showDialog = true;
  }

  hide() {
    this.showDialog = false;
    this.title = "";
    this.message = "";
    this.type = "";
    this.buttons = [];
    this.iconClass = 'fa-exclamation-circle';
    this.btnAlign = 'button-align-right';
    this.showDialog = false;
  }
}
