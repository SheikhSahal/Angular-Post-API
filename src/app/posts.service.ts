import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'Application/Json',
        accept : 'application/json'
      })
  };


  constructor(private api: HttpClient) { }
  getPosts(){
    return this.api.get('http://jsonplaceholder.typicode.com/posts');
  }
  addpost(){
    const post ={
      title : 'hellow world',
      body : 'this is body yah'
    };
    return this.api.post('http://jsonplaceholder.typicode.com/posts',post,this.httpHeaders);
  }
}
