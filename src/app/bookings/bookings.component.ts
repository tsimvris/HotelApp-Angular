import { Component, OnInit } from '@angular/core';
import { Bookings } from '../mock-bookings';
import { Booking } from '../booking';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {
  constructor() {}
  bookings = Bookings;
  ngOnInit(): void {}
  deleteBooking(booking: Booking): void {
    let i = Bookings.indexOf(booking);
    Bookings.splice(i, 1);
  }
}
