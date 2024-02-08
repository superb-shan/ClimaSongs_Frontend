import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SharedLocationService } from './shared-location.service';

@Injectable({
  providedIn: 'root'
})

export class LocationGuard implements CanActivate {
  constructor(
    private router: Router,
    private sharedLocationService: SharedLocationService
    ) {}

  canActivate(): boolean {
    if (this.sharedLocationService.locationPermission === "allowed") {
        return true; 
    }
    else{
        this.router.navigate(['/get-location']);
        return false;
    }
  }
}
