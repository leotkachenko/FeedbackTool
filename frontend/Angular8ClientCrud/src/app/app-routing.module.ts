import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { RightResponseComponent } from './components/right-response/right-response.component'
import {FeedbackComponent} from './components/feedback/feedback.component'
import {UploadFileComponent} from './components/upload-file/upload-file.component'

const routes: Routes = [{ path: '', redirectTo: 'tools', pathMatch: 'full' },
{path: 'tools', component: ToolListComponent},
{path: 'correct', component: RightResponseComponent},
{path: 'feedback', component: FeedbackComponent},
{path: 'upload', component: UploadFileComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
