import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuardService implements CanActivate {
  constructor(
    private websocketsService: WebsocketService,
    private router: Router
  ) {}

  canActivate() {
    if (this.websocketsService.getUser().name) {
      return true;
    } else {
      this.router.navigateByUrl('/');
      return false;
    }
  }
}
