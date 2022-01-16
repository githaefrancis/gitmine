import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { Repository } from '../repository-class/repository';
import { HttpService } from '../http-client/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMetadata } from '../user-metadata/user-metadata';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  users!:User[];
  userRepos!:Repository[];
  constructor(private repoService:HttpService,private route:ActivatedRoute,private router:Router) { 
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

  ngOnInit(): void {
    this.userRepos.splice(0);
    let username=this.route.snapshot.paramMap.get('login');
    let itemToFetch=this.route.snapshot.paramMap.get('item');
    this.repoService.searchGithub('users',`/${username}/${itemToFetch}`);
    this.userRepos=this.repoService.repos;

    this.repoService.searchGithub('users',`/${username}`);
    this.users=this.repoService.users;
    console.log(this.users);
    
    
  }

}
