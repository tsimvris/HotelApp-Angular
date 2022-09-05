import { Injectable } from '@angular/core';
import { Bookings } from './mock-bookings';
import { Booking } from './booking';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private httpClient: HttpClient) {}

  bookingsUrl: string = 'api/bookings';

  getBookings(): Observable<Booking[]> {
    let response = this.httpClient.get<Booking[]>(this.bookingsUrl);

    return response;
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
