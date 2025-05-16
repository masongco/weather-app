import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cityQuery: string = '';
  
  constructor(
    public auth: AuthService,
    private router: Router
  ) {}

  navigateToWeather() {
    if (this.cityQuery.trim()) {
      this.router.navigate(['/weather', this.cityQuery]);
    }
  }
}