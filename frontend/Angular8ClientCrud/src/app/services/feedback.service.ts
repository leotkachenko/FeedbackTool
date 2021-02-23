import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private base = 'http://localhost:8081/api/tools/feedback'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    const myHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', '*').set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    .set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    return this.http.post(this.base, input, {
      headers: myHeaders,
      reportProgress: true,
      responseType: 'json'
    })
  }

}