import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  public result: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  public Lottery(): void
  {
    let lottery = Math.round(Math.random() * 1) ? 1 : 0;
    // if(document.getElementById("black").)
		// {
		// 	document.getElementById("wybrana_bila").innerHTML = "Wybrałeś bilę <b>CZARNĄ</b>";
		// }
		// else if (document.getElementById("red").selec)
		// {
		// 	document.getElementById("wybrana_bila").innerHTML = "Wybrałeś bilę <b>CZERWONĄ</b>";
    // }
    
    if(lottery === 0)
    {
        this.result =  'PRZEGRANA';
    }
    if(lottery === 1)
    {
        this.result = 'WYGRANA';
    }
  }

}
