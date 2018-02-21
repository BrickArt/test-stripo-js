import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { TemplateService } from '../../shared/services/template.service';
import { APPTemplate } from '../../shared/models/template.mpdel';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-second-page",
  templateUrl: "./second-page.component.html",
  styleUrls: ["./second-page.component.css"]
})
export class SecondPageComponent implements OnInit {
  id: number;
  template: APPTemplate;
  selectedElement: HTMLElement;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private templateService: TemplateService,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      if (this.id) {
        this.templateService
          .getTemplatesById(this.id)
          .subscribe((temp: APPTemplate) => {
            this.template = temp;
            console.log(this.template);
          });
        // if(!this.template) this.router.navigate(['']);
      } else {
        this.router.navigate([""]);
      }
    });
  }

  elementWasChoosen(el: HTMLElement) {
    console.log(el);
    if (this.selectedElement) this.selectedElement.style.color = "black";
    this.selectedElement = el;
    this.selectedElement.style.color = "#3f51b5";
  }

  templateWasSeved(tmp: HTMLElement) {
    const id = this.template.id;
    const body = this.template;
    body.template = tmp.outerHTML;
    // console.log(tmp.innerHTML.toString());
    const time = new Date();
    body.modified = +time

    this.templateService
      .setTemplateUpdate(id, body)
      .subscribe((template: APPTemplate) => {
        let msg = "Шаблон " + template.name + " збережено!";
        this.openSnackBar(msg, "Закрити");
      });
    // console.log("saved");
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }
}
