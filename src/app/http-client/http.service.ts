import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // user!:User;
  users!: User[];
  repos!: Repository[];
  apiUrl: string = 'https://api.github.com';
  header: any = {
    headers: new HttpHeaders()
      .set('Authorization', `Token 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`)
  };
  constructor(private http: HttpClient) {

    this.users = [];
    this.repos=[];
  }


  public searchGithub(path: any, query: any) {
    interface ApiUserResponse {
      login: string;
      name: string;
      items: [];
    }

    interface ApiRepositoryResponse {
      id: string;
      name: string;
      description: string;
      owner: string;
      forks: number;
      link: string;
    }
    
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiRepositoryResponse>(`${this.apiUrl}/${path}?q=${query}`,this.header)

        .toPromise()
        .then(
          response => {
            if (response) {
              // this.user.items=response.items
              this.prepareResponse(path, response);
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

  prepareResponse(type: string, response: any) {
    if (type == "search/users") {
      var results = response.items;
      for (let result of results) {
        this.users.push(new User(result['login'], result['login'], result, result['avatar_url']))
        console.log(result);
      }
    }

    else if (type == "search/repositories") {

      var results = response.items;
      for (let result of results) {
        this.repos.push(new Repository(result['id'], result['full_name'], result['description'], result['owner'], result['forks'], result['url']))
      }
    }
  }

}