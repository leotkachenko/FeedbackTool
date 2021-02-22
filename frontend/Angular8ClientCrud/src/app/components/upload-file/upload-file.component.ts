import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  FormData: FormGroup;
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any> | undefined;

  constructor(private uploadService: UploadFileService, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
    this.FormData = this.builder.group({
      tittle: new FormControl('', [Validators.required]),})
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    this.progress = 0;
  
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
          console.log(this.selectedFiles)
        }
        this.FormData = this.builder.group({
          tittle: new FormControl('', [Validators.required]),
          file: this.uploadService.getFiles()
        });
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
    this.selectedFiles = undefined;
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.uploadService.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'http://localhost:8081/#/correct'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}