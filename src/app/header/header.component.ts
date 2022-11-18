import { Component, OnInit, } from '@angular/core';
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
export class HeaderComponent implements OnInit {
  // Output() serverCreated = new EventEmitter<{}
  // collapsed: boolean = true;
  // show: boolean = false;
  // @Output() displayPage = new EventEmitter<string>();

  constructor(private dataStorageService:DataStorageService) { }

  ngOnInit(): void {
  }
  onSaveData(){
    this.dataStorageService.StorePosts();
  }
  onfetchData(){
    this.dataStorageService.fetchPosts();
  }

}
