import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './components/first-page/components/table/table.component';
import { TemplateService } from './shared/services/template.service';
import { EditorComponent } from './components/second-page/components/editor/editor.component';
import { ViewerComponent } from './components/second-page/components/viewer/viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstPageComponent,
    SecondPageComponent,
    TableComponent,
    EditorComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [TemplateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
