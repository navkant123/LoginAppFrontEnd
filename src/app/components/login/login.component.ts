import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  credentials={
    userName:'',
    passWord:''
  }
constructor(){}
onSubmit(){
  console.log("Form is Submitted");
}

}
