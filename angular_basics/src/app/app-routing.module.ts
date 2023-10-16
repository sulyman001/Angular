import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './ngif/ngif.component';

const routes: Routes = [
  {path: 'ngif', component: NgifComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
