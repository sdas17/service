import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor( private httpClient: HttpClient) { }
  getalluser(){
return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
