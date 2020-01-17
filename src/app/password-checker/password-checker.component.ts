import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent implements OnInit {
  strength:string = '';
  password:string = '';
  score:number = 0;
  hasMinimumRequiredLength:boolean = false;
  hasUpperCase:boolean = false;
  uppercaseCount:number = 0;
  hasNumber:boolean = false;
  hasSymbol:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getPasswordScore(){
    this.checkLength();
    this.hasUppercase();

    this.score = 0;
    if(this.hasMinimumRequiredLength){
      this.score += 25;
    }
    if(this.hasUpperCase){
        this.score += 15;
        if(this.uppercaseCount > 1){
          this.score += 10;
        }
      }
      if(this.hasNumbers(this.password)){
        this.score += 20;
      }
      if(this.hasSymbols(this.password)){
        this.score += 30;
      }
  }

  checkLength(){
    if(this.password.length >= 8){
        this.hasMinimumRequiredLength = true;
      }
      else{
        this.hasMinimumRequiredLength = false;
      }
  }

  hasUppercase(){
    let passwordLength  = this.password.length;
    for (var i=0; i<=passwordLength; i++){
      if(this.password.charAt(i) >='A' && this.password.charAt(i) <= "Z")
        {
          this.hasUpperCase = true;
          this.uppercaseCount += 1;
        }
    }
  }

  hasNumbers(myString) {
    return /\d/.test(myString);
  }

  hasSymbols(myString){
    var symbols = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return symbols.test(myString);
  }
}
