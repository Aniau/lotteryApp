import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Player } from './content/models/player';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  public logPlayer: Subject<Player[]> = new Subject<Player[]>();

  constructor() {}

  public usersData(players: Player[]): void {
    this.logPlayer.next(players);
  }
}
