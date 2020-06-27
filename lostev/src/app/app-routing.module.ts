import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { MapComponent } from './map/map.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "user", component: LoginComponent },
  { path: "dispatcher", component: MapComponent },
  { path: "submit", component: SubmitComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
