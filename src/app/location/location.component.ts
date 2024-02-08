import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedLocationService } from './shared-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: []
})
export class LocationComponent {

  
  constructor(private http: HttpClient, public sharedLocationService: SharedLocationService, private router: Router,) {}
    
  ngOnInit() {
    this.getLocation();
  }
  
   getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const locationData = {
            latitude,
            longitude
          };
          console.log(locationData);

          this.http.post('http://127.0.0.1:8000/api/location/', locationData).subscribe(
            (response) => {
              console.log('Location data sent successfully:', response);
            },
            (error) => {
              console.error('Error sending location data:', error);
            }
          )
          
          this.sharedLocationService.locationPermission = "allowed";

          console.log(latitude, longitude);
          this.router.navigate([''])
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            this.sharedLocationService.locationPermission = "denied";
          }
        },
        {
          enableHighAccuracy: true,
          timeout: 10 * 1000, // 5 seconds
          maximumAge: 0  // Add this option to get fresh data # Cookies concept
        }
      );
    } else {
      console.log("Geolocation is not supported in this browser.");
    }
  }

  }
