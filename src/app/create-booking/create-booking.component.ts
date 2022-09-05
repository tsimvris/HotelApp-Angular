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
    private bookingService: BookingService,
    private FormBuilder: FormBuilder
  ) {}

  booking: Booking = {
    id: nanoid(),
    name: 'Petros',
    roomNumber: 10,
    startDate: new Date(),
    endDate: new Date(),
  };

  bookingForm = this.FormBuilder.group({
    id: [nanoid(), Validators.required],
    name: ['', Validators.required],
    roomNumber: [0, Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date(), Validators.required],
  });

  ngOnInit(): void {
    if (this.router.url != '/create') {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      let bookingById = this.bookingService
        .getBookingById(id!)
        .subscribe((result) => {
          this.booking = result;
          this.bookingForm.setValue({
            id: this.booking.id,
            name: this.booking.name,
            roomNumber: this.booking.roomNumber,
            startDate: this.booking.startDate,
            endDate: this.booking.endDate,
          });
        });
    }
  }

  onSubmit(): void {
    this.booking.id = this.bookingForm.get('id')?.value;
    this.booking.name = this.bookingForm.get('name')?.value;
    this.booking.roomNumber = this.bookingForm.get('roomNumber')?.value;
    this.booking.startDate = this.bookingForm.get('startDate')?.value;
    this.booking.endDate = this.bookingForm.get('endDate')?.value;
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
