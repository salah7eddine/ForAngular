import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from './../../models/User';
import { DataService } from './../../services/data.service';
import { UserService } from './../../services/user.service';

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
  @ViewChild('userForm', { static: false }) form: any;
  data: any;

  constructor(private dataService: DataService, private userService: UserService) { }

  ngOnInit() {

    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    // this.dataService.getData().subscribe(data => {
    //   console.log(data);
    // });

    // this.dataService.getUsers().subscribe(users => {
    //   this.users = users;
    //   this.loaded = true;
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

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.userService.addUser(value);
      // this.dataService.addUser(value);
      this.form.reset();
    }
  }


}
