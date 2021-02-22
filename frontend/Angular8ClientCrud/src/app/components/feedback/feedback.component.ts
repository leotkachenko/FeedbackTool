import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: FeedbackService) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      tittle: new FormControl('', [Validators.required]),
      summary: new FormControl('', [Validators.required]),
    });
  }


  onSubmit(FormData) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'http://localhost:8081/#/correct'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
