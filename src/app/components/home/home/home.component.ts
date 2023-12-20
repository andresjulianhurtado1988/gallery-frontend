import { Component } from '@angular/core';
import { dashboardDataData } from 'src/app/global/dashboard-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public imgAuthors: string = 'assets/img/fantasy_author.jpg';
  public dashboardData = dashboardDataData.home_data;
  constructor() {}
}
