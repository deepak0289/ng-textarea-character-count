import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-freetextbox',
  templateUrl: './freetextbox.component.html',
  styleUrls: ['./freetextbox.component.css']
})
export class FreetextboxComponent implements OnInit {

  @Input() charactersMaximumLimit:number;
  charactersRemaining:number;
  textAdded:string = 'csdvdssdscdsvdcsvsd bsdfuivbsfv csvsdvsd';

  constructor() {}

  ngOnInit() {
    this.countCharactersRemaining();
  }

  countCharactersRemaining(){
    this.charactersRemaining = this.charactersMaximumLimit - this.textAdded.length;
    return this.charactersRemaining;
  }

  // saveComment(value){
  //   console.log(value);
  // }


}
