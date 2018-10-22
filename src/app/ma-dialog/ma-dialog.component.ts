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
import {MaTemplate} from "../ma-shared-module/ma-template.directive";

@Component({
  selector: 'ma-dialog',
  templateUrl: './ma-dialog.component.html',
  styleUrls: ['./ma-dialog.component.scss']
})
export class MaDialogComponent implements OnInit, AfterViewInit {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter();
  @ContentChildren(MaTemplate) templates: QueryList<MaTemplate>;
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
