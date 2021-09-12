import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieItem: any;

  constructor(private movieService: MoviesService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    const movie = this.movieService.movieSelected;
    if (movie) {
      this.movieItem = movie;
    } else {
      this.router.navigate(['movies']);

    }
  }

  goBack() {
    this.location.back();
  }

}
