import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private mailApi = 'http://localhost:8081/api/tools/feedback'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.mailApi, input, {
      reportProgress: true,
      responseType: 'json'
    })
  }

}