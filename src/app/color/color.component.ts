import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // value = "";

  clr:string = ''

  myclr(color:string){
    console.log(color);
    this.clr = color;
    if(color=""){
      // console.log(color)

      this.clr =color
    }
  }

}
