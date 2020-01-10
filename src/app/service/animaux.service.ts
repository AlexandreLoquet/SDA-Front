import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Animaux} from '../animaux/animaux';
import {Observable} from 'rxjs';


@Injectable()
export class AnimauxService {

  private animauxUrl: string;

  constructor(private http: HttpClient) {
    this.animauxUrl = 'http://localhost:8080/animaux';
  }

  public findAll(): Observable<Animaux[]> {
    return this.http.get<Animaux[]>(this.animauxUrl + '/all');
  }

  public findFreeAnimaux(): Observable<Animaux[]> {
    return this.http.get<Animaux[]>(this.animauxUrl + '/free');
  }

  public save( animaux: Animaux) {
    return this.http.post<Animaux>(this.animauxUrl + '/new', animaux);
  }

  public deleteAnimaux(id: number) {
    return this.http.delete(this.animauxUrl + '/delete/' + id);
  }

  public adopt(id: number, a: Animaux) {
    return this.http.put(this.animauxUrl + '/adopt/' + id, a);
  }

}
