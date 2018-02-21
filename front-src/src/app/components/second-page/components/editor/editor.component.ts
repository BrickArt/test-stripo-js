import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { APPTemplate } from "../../../../shared/models/template.mpdel";

@Component({
  selector: "app-editor",
  templateUrl: "./editor.component.html",
  styleUrls: ["./editor.component.css"]
})
export class EditorComponent implements OnInit {
  @Input() template: APPTemplate;
  @Input() selectedElement: HTMLElement;

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      'text': new FormControl(null),
      'size': new FormControl(null)
    })

  }

  onSubmit() {
    console.log(this.template);
    if (this.form.value.text) this.selectedElement.textContent = this.form.value.text;
    if (this.form.value.size) this.selectedElement.style.fontSize = this.form.value.size +'px';
    this.form.reset();
  }
}
