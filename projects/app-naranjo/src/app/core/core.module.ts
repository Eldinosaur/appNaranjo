import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCoreComponent } from './pages/page-core/page-core.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    PageCoreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CoreModule { }
