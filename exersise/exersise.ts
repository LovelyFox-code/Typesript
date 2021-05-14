import { strict } from "assert";

export class User {
  firsName: string;
  lastName: string;
  emailAddress: string;
  readonly minimumAge: number = 18;
  protected id: string = ''
  constructor(firstName: string, lastName: string, emailAddress: string) {
    this.firsName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
  get fullName(): string {
    return `${this.firsName} ${this.lastName}` ;
  }
  doesEmailMatch(emailAddress: string):boolean{
    return this.emailAddress === this.emailAddress
  }
}
// inheritance
//child
export class Admin extends User {
    constructor(firstName:string, lastName:string, emailAddress:string) {
        super(firstName, lastName, emailAddress)
        this.firsName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }
    public setId(id: string): void{
      this.id = id;
    }
}

//shape
// export class Guest implements User {
//     firsName:string;
//     lastName:string;
//     emailAddress:string;
//     constructor(firstName:string, lastName:string, emailAddress:string) {
//         this.firsName = firstName;
//         this.lastName = lastName;
//         this.emailAddress = emailAddress;
//     }
//     get fullName():string {
//         return `${this.firsName} ${this.lastName}` ;
//       }
//       doesEmailMatch(emailAddress:string):boolean{
//         return this.emailAddress === this.emailAddress
//       }
// }

