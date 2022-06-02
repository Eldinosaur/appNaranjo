import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCoreComponent } from './core/pages/page-core/page-core.component';

const routes: Routes = [

  {path:'', component:PageCoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
