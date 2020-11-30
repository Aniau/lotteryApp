import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Lottery()
  {
    let lottery = Math.round(Math.random() * 1) ? 1 : 0;
    if(lottery === 0)
    {
        document.getElementById("wygrana").innerHTML = 'PRZEGRANA';
    }
    if(lottery === 1)
    {
        document.getElementById("wygrana").innerHTML = 'WYGRANA';
    }
  }

}
