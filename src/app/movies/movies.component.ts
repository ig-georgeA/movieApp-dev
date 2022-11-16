import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../services/movie-app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movieAppNowPlaying: any = null;
  public movieAppMovieList: any = null;
  public movieAppTheatres: any = null;
  public movieAppShowtimes: any = null;
  public movieAppTheatresNearYou: any = null;

  constructor(
    private movieAppService: MovieAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppService.getNowPlaying().subscribe(data => this.movieAppNowPlaying = data);
    this.movieAppService.getMovieList().subscribe(data => this.movieAppMovieList = data);
    this.movieAppService.getTheatres().subscribe(data => this.movieAppTheatres = data);
    this.movieAppService.getShowtimes().subscribe(data => this.movieAppShowtimes = data);
    this.movieAppService.getTheatresNearYou().subscribe(data => this.movieAppTheatresNearYou = data);
  }
}
