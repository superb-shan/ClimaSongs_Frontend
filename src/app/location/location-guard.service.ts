// location-guard.service.ts
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
    // Check the value of locationDenied here
    if (this.sharedLocationService.locationPermission === "allowed") {
        return true; // Allow access to the home page if locationDenied is false
    }
    else{
        this.router.navigate(['/get-location']); // Redirect to get-location if locationDenied is true
        return false;
    }
  }
}
