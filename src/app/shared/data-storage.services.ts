import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { PostsService } from "../posts.service";
import { AuthService } from "../auth/auth.service";
import { exhaustMap, map, take, tap } from "rxjs/operators";
import { Post } from '../post.model'
@Injectable({providedIn: 'root'})
export class DataStorageService{
    constructor(private http: HttpClient, private postService: PostsService, private authService: AuthService) {}

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
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
      return this.http.get<Post[]>(
      'https://my-first-app-anime-kingdom-default-rtdb.firebaseio.com/posts.json'
      )
    }),
    map (posts => {
      return posts.map( post => {
        
      })
    })
    );
  }
}
