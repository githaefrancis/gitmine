import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repository } from '../repository';
import { HttpService } from '../http-client/http.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {
  user!:User;
  userRepos!:Repository[];
  constructor(private repoService:HttpService,private route:ActivatedRoute) { 
    this.userRepos=[]
  }

  ngOnInit(): void {

    let username=this.route.snapshot.paramMap.get('login');
    let itemToFetch=this.route.snapshot.paramMap.get('item');
    this.repoService.searchGithub('users',`/${username}/${itemToFetch}`);
    this.userRepos=this.repoService.repos;
  }

}
