import { Component, OnDestroy, OnInit, } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// export class HeaderComponent {
//   constructor(private dataStorageService: DataStorageService){}

//   onSaveData(){
//     this.dataStorageService.StorePosts();
//   }
// }
export class HeaderComponent implements OnInit, OnDestroy {
  // Output() serverCreated = new EventEmitter<{}
  // collapsed: boolean = true;
  // show: boolean = false;
  // @Output() displayPage = new EventEmitter<string>();
  isAuthenticated = false;
  private userSub: Subscription

  constructor(
    private dataStorageService:DataStorageService,
    private authService: AuthService
    ) { }


  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);

    });
  }
  onSaveData(){
    this.dataStorageService.StorePosts();
  }
  onfetchData(){
    this.dataStorageService.fetchPosts();
  }
  ngOnDestroy(){
    throw new Error('Method not implemented.');
  }
}
