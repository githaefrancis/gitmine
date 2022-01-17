import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';
import { environment } from 'src/environments/environment';
import { UserMetadata } from '../user-metadata/user-metadata';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  users!: User[];
  userMetadata!: UserMetadata;
  repos!: Repository[];
  singleRepo!: Repository[];
  apiUrl: string = environment.apiUrl
  accessToken: string = environment.accessToken;
  header: any = {
    headers: new HttpHeaders()
      .set('Authorization', `Token ${this.accessToken}`)
  };
  constructor(private http: HttpClient) {
    this.userMetadata = new UserMetadata("", 0, 0, 0, new Date(16, 0, 2022));
    this.users = [];
    this.repos = [];
    this.singleRepo = [];

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
      this.http.get<ApiRepositoryResponse>(`${this.apiUrl}/${path}${query}`, this.header)

        .toPromise()
        .then(
          response => {
            if (response) {
              this.prepareResponse(path, response, query);
              resolve(true);
            }

          })
        .catch(error => {
          console.log(error);

        })

    })
    return promise;
  }

  prepareResponse(type: string, response: any, query: any) {
    const userPathRegex = new RegExp('repos', 'g')
    if (type == "search/users") {
      this.users.splice(0);
      var results = response.items;
      for (let result of results) {
        this.users.push(new User(result['login'], result['login'], result, result['avatar_url'], this.userMetadata))

      }

    }

    else if (type == "search/repositories") {
      this.repos.splice(0);
      var results = response.items;
      for (let result of results) {
        this.repos.push(new Repository(result['id'], result['full_name'], result['description'], result['owner']['login'], result['forks'], result['html_url']))
      }
    }
    else if (type == "users" && userPathRegex.test(query)) {

      this.repos.splice(0);
      this.users.splice(0);

      var results = response;
      var owner = response[0]['owner'];

      this.users.push(new User(owner['login'], owner['login'], owner, owner['avatar_url'], this.userMetadata))
      for (let result of results) {
        this.repos.push(new Repository(result['id'], result['full_name'], result['description'], result['owner'], result['forks'], result['html_url']))
      }
    }

    else if (type == 'users') {
      this.users.splice(0);
      var results = response;
      this.userMetadata = new UserMetadata(results['bio'], results['public_repos'], results['followers'], results['following'], new Date(results['created_at']));
      this.users.push(new User(results['login'], results['login'], [results], results['avatar_url'], this.userMetadata));
    }

    else if (type == 'repos') {
      this.singleRepo.splice(0);
      var results = response;
      var owner = results['owner'];
      this.singleRepo.push(new Repository(results['id'], results['full_name'], results['description'], results['owner']['login'], results['forks_count'], results['html_url']));
    }

  }

}