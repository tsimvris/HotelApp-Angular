import { Component, OnInit } from '@angular/core';
import {Booking} from '../booking';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor() { }
  booking : Booking = {
    id: 1,
    name: 'Petros Tsimvris',
    roomNumber: 69,
    startDate: new Date(),
    endDate: new Date("2021-09-14")
  }
  ngOnInit(): void {
  }

}
