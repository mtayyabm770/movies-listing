import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesListArray: any = [];
  movieSelected: any;

  constructor() { }
}
