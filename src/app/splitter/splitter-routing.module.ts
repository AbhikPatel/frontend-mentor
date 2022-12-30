import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplitterContainerComponent } from './splitter-container/splitter-container.component';

const routes: Routes = [{ path: '', component: SplitterContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SplitterRoutingModule { }
