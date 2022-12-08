import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Anime_Kingdom';
  myimage: string = "assets/images/myimage.jpg";
  // mylogo: string = "assets/images/.png"
}

