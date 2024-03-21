import { UserService } from '../../services/user.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {
  user = {
    fullName: '',
    username: '',
    password: '',
    roleId: ''
  };

  @Input() selectedUser: any;

  updateUser() {
    if (this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, this.selectedUser);
    }
    this.selectedUser = null;
  }

  cancelEdit() {
    this.selectedUser = null;
  }

  constructor(private userService: UserService) { }

  createUser() {
    this.userService.createUser(this.user);
    this.user = {
      fullName: '',
      username: '',
      password: '',
      roleId: ''
    };
  }
}

