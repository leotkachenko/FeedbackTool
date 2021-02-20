import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolListComponent } from './components/tool-list/tool-list.component';

const routes: Routes = [{ path: '', redirectTo: 'tools', pathMatch: 'full' },
{ path: 'tools', component: ToolListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
