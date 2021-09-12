import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListingComponent },
  { path: 'movie_detail', component: MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
