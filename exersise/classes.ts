import { strict } from "assert";

export class User {
  firsName:string;
  lastName:string;
  emailAddress:string;
  constructor(firstName, lastName, emailAddress) {
    this.firsName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
  get fullName():string {
    return `${this.firsName} ${this.lastName}` ;
  }
  doesEmailMatch(emailAddress:string):boolean{
    return this.emailAddress === this.emailAddress
  }
}

//child
export class Admin extends User {
    constructor(firstName:string, lastName:string, emailAddress:string) {
        super(firstName, lastName, emailAddress)
        this.firsName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }
}
// inheritance
//shape
export class Guest implements User {
    firsName:string;
    lastName:string;
    emailAddress:string;
    constructor(firstName:string, lastName:string, emailAddress:string) {
        this.firsName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }
    get fullName():string {
        return `${this.firsName} ${this.lastName}` ;
      }
      doesEmailMatch(emailAddress:string):boolean{
        return this.emailAddress === this.emailAddress
      }
}

// function ValidateEmail(mail):any 
// {
//  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(user.emailAddress))
//   {
//     return (true)
//   }
//     console.log("You have entered an invalid email address!");
 
//     return (false)
// }
// console.log(ValidateEmail(user.emailAddress));
