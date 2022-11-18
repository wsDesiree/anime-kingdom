import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // let option =  '';
  // option += '<option>select country</option>';
  // for(let country_code in country_list){
  //     // set selected option user country
  //     let selected = (country_code == user_country_code) ? ' selected' : '';
  //     option += '<option value="'+country_code+'"'+selected+'>'+country_list[country_code]+'</option>';
  // }
  // document.getElementById('country').innerHTML = option;
}
