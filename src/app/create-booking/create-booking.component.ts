import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Router, ActivatedRoute } from '@angular/router';
import { nanoid } from 'nanoid';
import { BookingService } from '../booking.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})
export class CreateBookingComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private bookingService: BookingService
  ) {}
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
      let bookingById = this.bookingService
        .getBookingById(id!)
        .subscribe((result) => {
          this.booking = result;
        });
    }
  }
  onSubmit(): void {
    this.bookingService.addBooking(this.booking).subscribe();
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
