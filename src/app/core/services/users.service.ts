import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    const url = `https://jsonplaceholder.typicode.com/users`;
    return this.http.get(url);
  }

  getUser(userId: string) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get(url);
  }
}
