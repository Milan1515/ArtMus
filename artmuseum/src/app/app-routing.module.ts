import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { ExibitionPageComponent } from './exibitions/exibition-page/exibition-page.component';
import { ExibitionsComponent } from './exibitions/exibitions.component';
import { NewExibitionComponent } from './exibitions/new-exibition/new-exibition.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "exibitions", component: ExibitionsComponent},
  {path: "exibitions/:id", component: ExibitionPageComponent},
  {path: "newExibition", component: NewExibitionComponent},
  {path: "", redirectTo: "/about", pathMatch: "prefix"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
