import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from '../users/users';

@Injectable()
export class UsersService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<Users[]> {
    return this.http.get<Users[]>(this.usersUrl + '/all');
}

}
