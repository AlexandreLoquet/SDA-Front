import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animals} from '../animals/animals';
import {Observable} from 'rxjs';


@Injectable()
export class AnimalsService {

  private animalsUrl: string;

  constructor(private http: HttpClient) {
    this.animalsUrl = 'http://localhost:8080/animals';
  }

  public findAll(): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.animalsUrl + '/all');
  }

  public findFreeAnimaux(): Observable<Animals[]> {
    return this.http.get<Animals[]>(this.animalsUrl + '/free');
  }

  public save( animals: Animals) {
    return this.http.post<Animals>(this.animalsUrl + '/new', animals);
  }

  public deleteAnimaux(id: number) {
    return this.http.delete(this.animalsUrl + '/delete/' + id);
  }

  public adopt(id: number, a: Animals) {
    return this.http.put(this.animalsUrl + '/adopt/' + id, a);
  }

}
