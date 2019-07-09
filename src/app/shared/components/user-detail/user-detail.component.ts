import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UsersService } from '../../../core/services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userInfoForm: FormGroup = this.fb.group({
    id: [null, Validators.required],
    name: [null, Validators.required],
    username: [null, Validators.required],
    street: [null, Validators.required],
    city: [null, Validators.required]
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.userService.getUser(this.route.snapshot.params.id).subscribe((res: User) => {
      this.initUserInfoForm(res);
    });
  }

  initUserInfoForm (userInfo: User) {
    this.userInfoForm.setValue({
      id: userInfo.id,
      name: userInfo.name,
      username: userInfo.username,
      street: userInfo.address.street,
      city: userInfo.address.city
    });
  }

  onOk() {
    this.router.navigate(['']);
  }
}
