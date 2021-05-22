import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient){}

  getAll() {
      return this.http.get<User[]>(`Base-URL/users`);
  }

  register(user: User) {
      return this.http.post(`Base-URL/users/register`, user);
  }

  delete(id: number) {
      return this.http.delete(`Base-URL/users/id`);
  }
}
