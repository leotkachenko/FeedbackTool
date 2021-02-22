import { Component, OnInit } from '@angular/core';
import { ToolService } from 'src/app/services/tool.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  tools: any;
  currentTool = null;
  currentIndex = -1;
  title = '';
  FormData: FormGroup;

  constructor(private toolService: ToolService, private builder: FormBuilder) { }

  ngOnInit() {
    this.retrieveTutorials();
    this.FormData = this.builder.group({});
  }

  retrieveTutorials() {
    this.toolService.getAll()
      .subscribe(
        data => {
          this.tools = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveTutorials();
    this.currentTool = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tool:any, index:any) {
    this.currentTool = tool;
    this.currentIndex = index;
    this.FormData = this.builder.group({
      id: tool._id,
      answer: tool.answer,
      description: tool.description
    });
  }

  onSubmit(FormData) {
    console.log(FormData)
    this.toolService.PostMessage(FormData)
      .subscribe(response => {
        location.href = 'http://localhost:8081/#/correct'
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}
