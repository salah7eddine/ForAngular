import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;


  constructor() { }

  ngOnInit() {
    console.log('init...');

    this.users = [
      {
        firstName: 'Hamza',
        lastName: 'Abousaid',
        age: 94,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Meryem',
        lastName: 'Hajar',
        age: 18,
        address: {
          street: '50 Main st',
          city: 'Boston',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('11/07/2017 09:30:00')
      },
      {
        firstName: 'papi',
        lastName: 'Abousaid',
        age: 62,
        address: {
          street: 'wlad sidi chenane',
          city: 'Settat',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('10/02/2016 10:30:00')
      }
    ];
    this.loaded = true;

    // this.addUser({
    //   firstName: 'mami',
    //   lastName: 'Nachit'
    // });


  }

  addUser(user: User) {
    this.users.push(user);
  }

  fireEvent(e) {
    console.log(e);
  }


}
