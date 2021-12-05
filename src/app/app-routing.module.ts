import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./pages/add/add.component";
import {AllComponent} from "./pages/all/all.component";

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'all', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
