import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Booking } from './booking';
import { nanoid } from 'nanoid';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const bookings: Booking[] = [
      {
        id: nanoid(),
        name: 'Petros Tsimvris',
        roomNumber: 69,
        startDate: new Date('2022-09-01'),
        endDate: new Date('2022-09-22'),
      },
      {
        id: nanoid(),
        name: 'Maria Döring',
        roomNumber: 24,
        startDate: new Date('2022-09-01'),
        endDate: new Date('2022-09-22'),
      },
      {
        id: nanoid(),
        name: 'Mika Döring',
        roomNumber: 3,
        startDate: new Date('2022-10-12'),
        endDate: new Date('2022-10-30'),
      },
      {
        id: nanoid(),
        name: 'King Tsimvris',
        roomNumber: 1,
        startDate: new Date('2022-10-19'),
        endDate: new Date('2022-10-30'),
      },
      {
        id: nanoid(),
        name: 'Groot',
        roomNumber: 42,
        startDate: new Date('2022-10-12'),
        endDate: new Date('2022-10-19'),
      },
    ];
    return bookings;
  }
  constructor() {}
}
