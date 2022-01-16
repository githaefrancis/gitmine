import { UserMetadata } from "../user-metadata/user-metadata";
export class User {

  constructor(public login:string,public name:string,public items:any[],public avatar:string,public metadata:UserMetadata){


  }
}
