import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ascha',
  templateUrl: './ascha.component.html',
  styleUrls: ['./ascha.component.css']
})
export class AschaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mymsg(){
    console.log("i am a ascha");
    
  }


}
