import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  TemplateRef
} from '@angular/core';
import {AgTemplate} from "../ag-shared-module/ag-template.directive";

@Component({
  selector: 'ag-simple-dialog',
  templateUrl: './ag-simple-dialog.component.html',
  styleUrls: ['./ag-simple-dialog.component.scss']
})
export class AgSimpleDialogComponent implements OnInit, AfterViewInit {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();
  @ContentChildren(AgTemplate) templates: QueryList<AgTemplate>;
  headerTemplate: TemplateRef<any>;
  bodyTemplate: TemplateRef<any>;
  footerTemplate: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

  closeModal() {
    const me = this;
    me.visible = false;
    me.visibleChange.emit(me.visible)
  }

  ngAfterViewInit(): void {
    const me = this;
    me.templates.forEach(item => {
      switch (item.getType()) {
        case 'header':
          me.headerTemplate = item.template;
          break;
        case 'body':
          me.bodyTemplate = item.template;
          break;
        case 'footer':
          me.footerTemplate = item.template;
          break;
      }
    })
  }


}
