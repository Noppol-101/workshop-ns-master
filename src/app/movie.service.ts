import { Injectable } from '@angular/core';
import { Movie } from './movie';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }
  
  getMovie(Movieid: number):Observable<Array<Movie>> {
    return this.http.get<Array<Movie>>('https://638492184ce192ac605bc39a.mockapi.io/Movie/'+ Movieid);
  }

}
