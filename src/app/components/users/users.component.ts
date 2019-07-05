import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;


  constructor() { }

  ngOnInit() {
    console.log('init...');

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
    this.loaded = true;

    // this.addUser({
    //   firstName: 'mami',
    //   lastName: 'Nachit'
    // });


  }

  initUser() {
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);


  //   this.initUser();

  // }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    console.log(123);

    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.target.value);
    console.log(e.type);
  }


}
