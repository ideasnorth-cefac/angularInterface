import { Component, OnInit } from '@angular/core';

export interface Order{
  value: string;
  viewValue: string;
}

export interface Type{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() { }

    orders: Order[] = [
      { value: 'asc', viewValue: 'ascending'},
      { value: 'desc', viewValue: 'descending'}
    ];

    types: Type[] = [
      { value: 'visits', viewValue: 'Total number of visits'},
      { value: 'time_created ', viewValue: 'Creation time'},
      { value: 'time_last_access ', viewValue: 'Last Visited'}
    ];


}
