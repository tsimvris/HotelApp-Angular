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
  getBookingById(id: string): Booking {
    let bookingById = Bookings.find((booking) => booking.id === id)!;
    return bookingById;
  }
  addBooking(booking: Booking): void {
    Bookings.push(booking);
  }
  updateBooking(booking: Booking): void {
    let currentBooking = this.getBookingById(booking.id);
    currentBooking = booking;
  }
}
