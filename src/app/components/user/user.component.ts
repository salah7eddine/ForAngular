import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  // template: '<h2>Abousaid SHM</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  // styles: [`
  //   h2 {
  //     color: blue
  //   }
  // `]
})

export class UserComponent implements OnInit {
  // Properties
  user: User;


  // firstName: string;
  // lastName: string;
  // age: number;
  // address;

  // foo: any;
  // hasKids: boolean;
  // numberArray: number[];
  // stringArray: string[];
  // mixedArray: any[];
  // myTuple: [string, number, boolean];
  // unusable: void;
  // u: undefined;
  // n: null;

  // Methods
  constructor() {


    // console.log('Hello User....');
    // this.sayHello();
    // console.log(this.age);
    // this.hasBirthday();
    // console.log(this.age);

    // this.firstName = 'Salah';
    // this.lastName = 'Abousaid';
    // this.age = 30;

    // this.address = {
    //   street: '50 Main st',
    //   city: 'Boston',
    //   state: 'MA'
    // }

    // this.foo = 5;

    // this.hasKids = false;

    // this.numberArray = [1, 2, 4];
    // this.stringArray = ['Hello', 'world'];
    // this.mixedArray = [true, undefined, 'Hi', 7]
    // this.myTuple = ['hello', 1, true];
    // this.unusable = undefined;
    // this.u = undefined;
    // this.n = null;

    // console.log(this.addNumbers(2, 5));
  }

  ngOnInit() {
    this.user = {
      firstName: 'Hamza',
      lastName: 'Abousaid',
      age: 24,
      email: 'mizo@gmail.com',
      address: {
        street: '50 Main st',
        city: 'Boston',
        state: 'MA'
      }
    }

  }

  // sayHello() {
  //   console.log(`Hello ${this.firstName}`);
  // }

  // hasBirthday() {
  //   this.age += 1;
  // }

  // showAge() {
  //   return this.age + 2;
  // }

  // addNumbers(num1: number, num2: number): boolean {
  //   return true;
  // }

}

