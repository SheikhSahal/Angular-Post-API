import { Component } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpGEtAPI';
  posts : any = null;

  constructor(private apiPosts: PostsService){
    this.apiPosts.getPosts().subscribe(data => this.posts = data);
    this.apiPosts.addpost().subscribe(post => this.posts.push(post));
  }
}
