import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  booking: Booking = {
    id: 111,
    name: 'Your Name',
    roomNumber: 111,
    startDate: new Date(),
    endDate: new Date(),
  };
  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      let bookingById = Bookings.find((booking) => booking.id === id)!;
      this.booking = bookingById;
    }
  }
  onSubmit(): void {
    Bookings.push(this.booking);
    this.router.navigate(['/bookings']);
  }
}
