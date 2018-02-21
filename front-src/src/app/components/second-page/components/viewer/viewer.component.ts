import { Component, OnInit, Input, Output, EventEmitter, ViewChild, TemplateRef } from "@angular/core";
@Component({
  selector: "app-viewer",
  templateUrl: "./viewer.component.html",
  styleUrls: ["./viewer.component.css"]
})
export class ViewerComponent implements OnInit {
  @Input() template: HTMLElement;
  @Output() onElementChoose = new EventEmitter<HTMLElement>();
  @ViewChild("tmp") tmp;
  @Output() onSaveTemplate = new EventEmitter();

  el: HTMLElement;


  constructor() {}

  ngOnInit() {
    console.log(this.template);
  }

  onClick(event: any) {
    this.el = event.srcElement;
    this.onElementChoose.emit(this.el);
  }

  onTemplateSave(tmp: HTMLElement) {
    if (this.el) this.el.style.color = "black";
    const tmpBody = tmp.children[0];
    this.onSaveTemplate.emit(tmpBody);
  }

  private templateInit() {
    const root = document.getElementById('template')
    for (let i = 0; i < 10; i++) {


    }

  }
}
