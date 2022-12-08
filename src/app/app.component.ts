import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import{ Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
    ]),
    trigger('list1', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('* => void', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
        transition('* => void', [
          animate(300, style({
            transform: 'translateX(100px)',
            opacity: 0
          }))
        ])
      ]),
      // transition('highlighted => normal', animate(800)),
    ]},
  )
export class AppComponent implements OnInit, OnDestroy {
  state = 'normal';


  loadedPosts: Post[] =[];
  isFetching = false;
  error: any | null;
  private errorSub!: Subscription;
  signupForm: any;
  forbiddenUsername: any;
  OnAnimate(){
    this.state == 'normal' ? this.state ='highlighted' : this.state = 'normal';
    // this.wildState == 'normal' ? this.wildState ='highlighted' : this.wildState = 'normal';
  };

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error =errorMessage;
    });

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts =>{
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
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
      this.isFetching =false;
      this.error = error.message;
  });
  }

  OnClearPosts(){
    // Send Http request
    this.postsService.deletePosts().subscribe(() =>{
      this.loadedPosts = [];
    });
  }
  onHandleError(){
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }
  onSubmit(){
    console.log(this.signupForm);
  }
  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  // forbiddenName(control: FormControl): {[s: string]: boolean}{
  //   if (this.forbiddenUsername.indexOf(control.value) !== -1){
  //     return {'nameIsForbidden':true};
  //   }
    // return null;
  // }
  // forbiddenEmails(control: FormControl): Promise<any> |

  // }
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
