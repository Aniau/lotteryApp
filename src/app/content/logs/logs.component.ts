import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
  providers: [UserDataService]
})
export class LogsComponent implements OnInit {

  public players: Array<Player> = [];

  constructor(private userDataService: UserDataService) 
  {   
  }

  ngOnInit(): void {
    this.players = [];

    this.userDataService.logPlayer.subscribe(result => {
      this.players = [...result];
    })
  }

}
