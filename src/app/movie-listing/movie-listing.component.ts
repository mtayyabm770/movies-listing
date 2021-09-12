import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.css']
})
export class MovieListingComponent implements OnInit {

  
  moviesList: any;
  search: any = '';

  constructor(private http: HttpClient, private moviesService: MoviesService, private router: Router) {
  }

  ngOnInit(): void {
    this.getMoviesData();
  }

  getMoviesData() {
    this.http.get('assets/movies.json').subscribe(data => {
      console.log(data);
      this.moviesList = data;
      this.moviesService.moviesListArray = this.moviesList;
      this.moviesService.movieSelected = {};

    });

  }

  getMovieDetail(movieItem) {
    this.moviesService.movieSelected = movieItem;
    this.router.navigate(['movie_detail']);
  }

}
