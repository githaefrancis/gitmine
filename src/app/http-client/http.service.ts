import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // user!:User;
  users!:User[];
  apiUrl: string = 'https://api.github.com';
  header: any = {
    headers: new HttpHeaders()
      .set('Authorization', `Token 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`)
  };
  constructor(private http: HttpClient) { 

    this.users=[];
  }
  
  public searchGithub(path:any,query:any) {
    interface ApiResponse{
    login:string;
    name:string;
    items:[];
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`${this.apiUrl}/${path}?q=${query}`)
    
      .toPromise()
      .then(
        response => {
          if(response){
            // this.user.items=response.items
            var results=response.items;
            for(let result of results){
              this.users.push(new User(result['login'],result['login'],result))
              console.log(result);
            }
            console.log(response);
            console.log(this.users)
            resolve(true);
          }

          

        

      },
        error => {

          console.log("not going anywhere");
          reject(error)
        }


      )
    })
      return promise;
  }

}