import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  show: boolean = false;

  ngOnInit() {
  }
  canCel(){
    this.show = false;
  }
  onClickSubmit(data) {

    console.log("login as: ",data.manager);
    if(data.manager == ''){
      this.show = true;
      //alert("Please select the user type");
    }
    else if(data.manager =="editor")
    this.router.navigate(['./editor/newsList']);
    else
    this.router.navigate(['./agent']);
     }

}
