import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDataService } from 'src/app/user-data.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent implements OnInit, OnDestroy {
  public showLogs = false;
  public players: Array<Player> = [];
  protected subscriptions: Array<Subscription> = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.userDataService.logPlayer.subscribe((result) => {
        this.players = result;

        if (this.players && this.players.length > 0) {
          this.showLogs = true;
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}
