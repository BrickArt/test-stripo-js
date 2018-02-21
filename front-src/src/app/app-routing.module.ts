import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

import { FirstPageComponent } from "./components/first-page/first-page.component";
import { SecondPageComponent } from "./components/second-page/second-page.component";
import { NotFoundComponent } from "./shared/components/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: FirstPageComponent },
  { path: "template/:id", component: SecondPageComponent },
  { path: "💩", component: NotFoundComponent },
  { path: "**", redirectTo: "💩", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
