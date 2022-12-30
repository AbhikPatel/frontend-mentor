import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'splitter', pathMatch:'full'},
  { path: 'splitter', loadChildren: () => import('./splitter/splitter.module').then(m => m.SplitterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
