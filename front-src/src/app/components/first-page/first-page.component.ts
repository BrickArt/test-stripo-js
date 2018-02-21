import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../shared/services/template.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  templates: any[] = [];

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
    this.templateService.getTemplates().subscribe((temps: any[]) => {
      this.templates = temps;
    })
  }

}
