import { Component, OnInit } from '@angular/core';
import { ToolService } from 'src/app/services/tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css']
})
export class ToolListComponent implements OnInit {

  tools: any;
  currentTool = null;
  currentIndex = -1;
  answer = '';

  constructor(private toolService: ToolService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    this.toolService.getAll()
      .subscribe(
        data => {
          this.tools = data;
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

  setActiveTutorial(tool: null, index: number) {
    this.currentTool = tool;
    this.currentIndex = index;
  }

  // removeAllTutorials() {
  //   this.toolService.deleteAll()
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.refreshList();
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  searchTitle() {
    this.toolService.findByTitle(this.answer)
      .subscribe(
        data => {
          this.tools = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}