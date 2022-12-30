import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SplitterContainerComponent } from './splitter-container/splitter-container.component';
import { SplitterRoutingModule } from './splitter-routing.module';
import { SplitterPresentationComponent } from './splitter-container/splitter-presentation/splitter-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SplitterContainerComponent,
    SplitterPresentationComponent
  ],
  imports: [
    CommonModule,
    SplitterRoutingModule,
    ReactiveFormsModule
  ]
})
export class SplitterModule { }
