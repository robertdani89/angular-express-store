import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: '', redirectTo: "stores/61e719d32b673b30625d8e03", pathMatch: "full" },
  { path: 'stores/:id', component: StoreComponent },
  { path: "**", redirectTo: "stores/61e719d32b673b30625d8e03", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }