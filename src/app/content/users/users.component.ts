import { InputOutputPropertySet } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserDataService } from 'src/app/user-data-service.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserDataService]
})
export class UsersComponent implements OnInit 
{
  public players: Array<Player> = [];

  public showLogs: boolean | undefined;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void
  {
  }

  public removeUser(index: number): void
  {
    this.players.splice(index,1);
  }

  public addUser()
  {
    const playersCount = this.players.length;

    this.players.push(new Player('Player ' + (playersCount + 1)));
  }

  public sendUsers(): void
  {
    this.userDataService.usersData(this.players);

    this.showLogs = true;
  }
}
