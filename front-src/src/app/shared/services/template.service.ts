import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { BaseApi } from "../core/base-api";
import { APPTemplate } from "../models/template.mpdel";

@Injectable()
export class TemplateService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  public getTemplates(): Observable<any[]> {
    return this.get("templates");
  }

  public getTemplatesById(id: number): Observable<any> {
    return this.get(`templates/${id}`).map(
      (templates: any[]) => (templates[0] ? templates[0] : undefined)
    );
  }

  public setTemplateUpdate( id: number, body: APPTemplate ): Observable<APPTemplate> {
    return this.put(`templates/${id}`, body);
  }
}
