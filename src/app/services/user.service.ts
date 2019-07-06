import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from './../models/User';
import { of } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Hamza',
        lastName: 'Abousaid',
        email: 'mizo@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Meryem',
        lastName: 'Hajar',
        email: 'mery@gmail.com',
        isActive: false,
        registered: new Date('11/07/2017 09:30:00'),
        hide: true
      },
      {
        firstName: 'papi',
        lastName: 'Abousaid',
        email: 'papi@gmail.com',
        isActive: true,
        registered: new Date('10/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {

      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({ name: 'salah' });
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
