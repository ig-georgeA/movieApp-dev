import { Component, OnInit } from '@angular/core';
import { MovieAppService } from '../services/movie-app.service';

@Component({
  selector: 'app-my-purchases',
  templateUrl: './my-purchases.component.html',
  styleUrls: ['./my-purchases.component.scss']
})
export class MyPurchasesComponent implements OnInit {
  public movieAppMyPurchases: any = null;

  constructor(
    private movieAppService: MovieAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppService.getMyPurchases().subscribe(data => this.movieAppMyPurchases = data);
  }
}
