import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCoreComponent } from './pages/page-core/page-core.component';

const routes: Routes = [
  {path:'', component:PageCoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
