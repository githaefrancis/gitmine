import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { HttpService } from '../http-client/http.service';
import { User } from '../user';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  
  users:User[]=[new User("Ra","Fra",[])];
  userss:any[]=[];
  constructor(private route:ActivatedRoute,private http:HttpService) { }


  showUsers(){
    console.log(this.users);
  }
  ngOnInit(): void {
    let query=this.route.snapshot.paramMap.get('query');
    console.log(`Your search query is ${query}`)
    this.http.searchGithub('search/users',query);
    this.users=[this.http.user];
    console.log(this.users);
    
  }

}
