import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};


  constructor() { }

  ngOnInit() {
    console.log('init...');

    // setTimeout(() => {
    //   this.users = [
    //     {
    //       firstName: 'Hamza',
    //       lastName: 'Abousaid',
    //       age: 24,
    //       address: {
    //         street: '50 Main st',
    //         city: 'Boston',
    //         state: 'MA'
    //       }
    //     },
    //     {
    //       firstName: 'Meryem',
    //       lastName: 'Abousaid',
    //       age: 18,
    //       address: {
    //         street: '50 Main st',
    //         city: 'Boston',
    //         state: 'MA'
    //       }
    //     },
    //     {
    //       firstName: 'papi',
    //       lastName: 'Abousaid',
    //       age: 62,
    //       address: {
    //         street: 'wlad sidi chenane',
    //         city: 'Settat',
    //         state: 'MA'
    //       }
    //     }
    //   ];
    //   this.loaded = true;
    // }, 2000);

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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
        balance: 100,
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
        image: 'http://lorempixel.com/600/600/people/2',
        isActive: false,
        balance: 200,
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
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        balance: 50,
        registered: new Date('10/02/2016 10:30:00')
      }
    ];
    this.loaded = true;
    // this.showExtended = false;

    // this.addUser({
    //   firstName: 'mami',
    //   lastName: 'Nachit'
    // });

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '80px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
