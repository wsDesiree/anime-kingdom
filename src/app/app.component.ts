import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] =[];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error =errorMessage;
    });

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching =false;
      this.loadedPosts =posts;
  },
      error =>{
        this.isFetching = false;
        this.error = error.message;
      }
    );
  }

  onCreatePost(postData: Post){
    this.postsService.createAndStorePost(postData.title, postData.content);
    // Send Http request
    // this.http
    // .post<{name:string}>('https://my-first-app-anime-kingdom-default-rtdb.firebaseio.com/posts.json',
    // postData
    // )
    // .subscribe(responseData => {
    //   console.log(responseData);
    // });
  }

  onFetchPosts(){
  // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts =>{
      this.isFetching =false;
      this.loadedPosts =posts;
  }, error =>{
    this.error = error.message;
  });
  }

  OnClearPosts(){
    // Send Http request
    this.postsService.deletePosts().subscribe{() =>{
      this.loadedPosts = [];
    }};
  }
  onHandleError(){
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
}
  // private fetchPosts(){
  //   this.isFetching = true;
    // this.http
    // .get<{ [key: sting]: Post }>('https://my-first-app-anime-kingdom-default-rtdb.firebaseio.com/posts.json')
    // .pipe(
    //   map(responseData => {
    //     const postsArray:Post[] = [];
    //     for (const key in responseData) {
    //       if (responseData.hasOwnProperty(key)) {
    //         postsArray.push({ ...responseData[key], id: key });
    //       }
    //     }
    //     return postsArray;
    //   })
    // )
    // .subscribe(posts => {
    //   this.isFetching = false;
    //   // ...
    //   this.loadedPosts =posts;
    // });
  }

