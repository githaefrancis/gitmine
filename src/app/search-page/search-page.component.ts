import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { HttpService } from '../http-client/http.service';
import { User } from '../user';
import { Repository } from '../repository';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  
  users:User[]=[];
  repositories:Repository[]=[]
  constructor(private route:ActivatedRoute,private http:HttpService) { }


  showUsers(){
    console.log(this.users);
  }
  loadResults(){
    this.users.slice();
    this.repositories.slice();
    console.log("we just reloaded");
    let query=this.route.snapshot.paramMap.get('query');
    console.log(`Your search query is ${query}`)
    this.http.searchGithub('search/users',query);
    this.users=this.http.users;
    this.http.searchGithub('search/repositories',`?q=${query}`);
    this.repositories=this.http.repos;
    console.log(this.users);
    console.log(this.repositories);
  }
  ngOnInit(): void {
    this.loadResults();
    
  }

}
