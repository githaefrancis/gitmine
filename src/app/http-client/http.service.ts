import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Repository } from '../repository';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  users!: User[];
  repos!: Repository[];
  apiUrl: string = environment.apiUrl
  accessToken:string=environment.accessToken;
  header: any = {
    headers: new HttpHeaders()
      .set('Authorization', `Token ${this.accessToken}`)
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
      this.http.get<ApiRepositoryResponse>(`${this.apiUrl}/${path}${query}`,this.header)

        .toPromise()
        .then(
          response => {
            if (response) {
              // this.user.items=response.items
              this.prepareResponse(path, response,query);
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

  prepareResponse(type: string, response: any,query:any) {
    const userPathRegex=new RegExp('repos','g')
    if (type == "search/users") {
      this.users.splice(0);
      var results = response.items;
      for (let result of results) {
        this.users.push(new User(result['login'], result['login'], result, result['avatar_url']))
        console.log(result);
      }
      console.log(this.users);
    }

    else if (type == "search/repositories") {
      this.repos.splice(0);
      var results = response.items;
      for (let result of results) {
        this.repos.push(new Repository(result['id'], result['full_name'], result['description'], result['owner']['login'], result['forks'], result['url']))
      }
    }
    else if (type=="users" && userPathRegex.test(query)) {
    
      this.repos.splice(0);
      this.users.splice(0);
      
      var results = response;
      var owner=response[0]['owner'];

      this.users.push(new User(owner['login'],owner['login'],owner,owner['avatar_url']))
      for (let result of results) {
        this.repos.push(new Repository(result['id'], result['full_name'], result['description'], result['owner'], result['forks'], result['url']))
      }
    }

    else if(type=='users'){
      this.users.splice(0);
      var results=response;
      console.log(`${results} are in`);
      this.users.push(new User(results['login'],results['login'],[],results['avatar_url']))
    }
    
  }

}