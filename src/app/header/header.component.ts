import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Output() serverCreated = new EventEmitter<{}
  // collapsed: boolean = true;
  // show: boolean = false;
  // @Output() displayPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
