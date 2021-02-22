import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8081/api/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  
  private base = 'http://localhost:8081/api/tools/save'
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(baseUrl);
  }

  PostMessage(input: any) {
    return this.http.post(this.base, input, {
      reportProgress: true,
      responseType: 'json'
    })
  }
}
