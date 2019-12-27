import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Sda} from '../sda/sda';

@Injectable()
export class SdaService {

  private sdaUrl: string;

  constructor(private http: HttpClient) {
    this.sdaUrl = 'http://localhost:8080/sda';
  }

  public findAll(): Observable<Sda[]> {
    return this.http.get<Sda[]>(this.sdaUrl + '/all');
  }
}
