import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { PostsService } from "../posts.service";

@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private postService: PostsService) {}

    StorePosts(){
      const posts = this.postService.getPosts();
      return this.http
      .put(
        'https://my-first-app-anime-kingdom-default-rtdb.firebaseio.com/posts.json',
      posts
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchPosts(){
    this.http
    .get(
      'https://my-first-app-anime-kingdom-default-rtdb.firebaseio.com/posts.json'
      )
      .subscribe(); {
        console.log()
      }
  }
}
