import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      id: 1,
      fullName: 'Admin',
      username: 'admin',
      password: 'admin',
      roleId: 1
    },
    {
      id: 2,
      fullName: 'Juan Pila',
      username: 'teacher',
      password: 'teacher',
      roleId: 2
    },
    {
      id: 3,
      fullName: 'Manuel Perez',
      username: 'student',
      password: 'student',
      roleId: 3
    }
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  createUser(user: any) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, updatedUser: any) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return true;
    }
    return false;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return true;
    }
    return false;
  }
}