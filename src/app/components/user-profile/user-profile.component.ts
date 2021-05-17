import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';

// User interface
export class User {
  name: String;
  email: String;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {
  UserProfile: User;
  loader: boolean;

  constructor(
    public authService: AuthService
  ) {
    this.authService.profileUser().subscribe((data: any) => {
      this.loader = false;
      this.UserProfile = data;
    })
  }

  ngOnInit() {
    this.loader = true;
  }

}