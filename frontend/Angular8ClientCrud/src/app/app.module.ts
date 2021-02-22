import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RightResponseComponent } from './components/right-response/right-response.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { FeedbackService } from './services/feedback.service'

@NgModule({
  declarations: [
    AppComponent,
    ToolListComponent,
    RightResponseComponent,
    FeedbackComponent,
    UploadFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
