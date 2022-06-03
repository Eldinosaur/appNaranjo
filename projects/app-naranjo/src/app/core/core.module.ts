import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCoreComponent } from './pages/page-core/page-core.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  declarations: [

    PageCoreComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
