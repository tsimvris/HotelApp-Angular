import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor() {}
  getBookings(): Booking[] {
    return Bookings;
  }
  deleteBooking(booking: Booking): void {
    let i = Bookings.indexOf(booking);
    Bookings.splice(i, 1);
  }
}
