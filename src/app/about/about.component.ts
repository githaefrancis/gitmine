import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';
import { HttpService } from '../http-client/http.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users!:User[];
  userRepos!:Repository[];
  constructor(private httpService:HttpService,private route:ActivatedRoute,private router:Router) {
    this.userRepos=[]
    this.users=[];
   }
   goToRepo(path:string){

    var subPaths=path.split('/')
    console.log(path);
    let username=subPaths[0];
    let repoName=subPaths[1]
    this.router.navigate(['repos',username,repoName]);
  }

  openUser(){
    this.router.navigate(['user','githaefrancis','repos']);
  }
  ngOnInit(): void {

    this.userRepos.splice(0);
    let username='githaefrancis';
    let itemToFetch='repos';
    this.httpService.searchGithub('users',`/${username}/${itemToFetch}`);
    this.userRepos=this.httpService.repos;

    this.httpService.searchGithub('users',`/${username}`);
    this.users=this.httpService.users;
    console.log(this.users);
  }

}
