import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { nanoid } from 'nanoid';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  booking: Booking = {
    id: nanoid(),
    name: '',
    roomNumber: 0,
    startDate: new Date(),
    endDate: new Date(),
  };
  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      let bookingById = Bookings.find((booking) => booking.id === id)!;
      this.booking = bookingById;
    }
  }
  onSubmit(): void {
    let bookingById = Bookings.find(
      (booking) => booking.id === this.booking.id
    )!;
    if (bookingById === null || bookingById == undefined) {
      Bookings.push(this.booking);
    } else {
      bookingById = this.booking;
    }
    this.router.navigate(['/bookings']);
  }
  dateChanged(event: Event, isStart: boolean) {
    let value = (event.target as HTMLInputElement).value;
    if (isStart) {
      this.booking.startDate = new Date(value);
    } else {
      this.booking.endDate = new Date(value);
    }
  }
}
