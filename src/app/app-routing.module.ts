import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { HomeComponent } from './home/home.component';
import { LocationGuard } from './location/location-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [LocationGuard] },
  { path: 'get-location', component: LocationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
