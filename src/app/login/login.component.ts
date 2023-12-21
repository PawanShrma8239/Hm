import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @ViewChild('loginForm', { static: false }) loginForm!: NgForm;  // Add definite assignment assertion (!)


username : string ='';
password : string = '';



constructor( private router : Router){}


login(){
  console.log('Before Condition check:', this.username, this.password);
console.log('Username:', this.username);
console.log('Password', this.password);

  if(this. username ="abc" && (this. password ="abc@123")){
  //Successful login
  console.log('Successful Login');
  this.router.navigate(['/feature']);

  this.username = '';
  this.password = '';
  this.loginForm.form.reset(); // Reset the form
  console.log("reset happen");

}else{
  console.log('Invalid user name or password')
  alert('Invalid username or password');
}


}
}