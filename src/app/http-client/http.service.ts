import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl: string = 'https://api.github.com';
  header: any = {
    headers: new HttpHeaders()
      .set('Authorization', `Token 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`)
  };
  constructor(private http: HttpClient) { }
  
  public searchGithub(path:any,query:any) {
    interface ApiResponse{
    login:string;
    name:string
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`${this.apiUrl}/${path}?q=${query}`,this.header)
    
      .toPromise()
      .then(response => {

        console.log(response);
        resolve(true);
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