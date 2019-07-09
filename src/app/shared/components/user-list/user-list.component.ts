import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from '../../models/user';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((res: User[]) => {
      res.map(user => {
        this.users.push(user);
      });
    });
  }

  clickUser(user: User) {
    this.router.navigate([`${user.id}`], {relativeTo: this.route});
  }
}
