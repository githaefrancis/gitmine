import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { HttpService } from '../http-client/http.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private http:HttpService) { }

  ngOnInit(): void {
    let query=this.route.snapshot.paramMap.get('query');
    console.log(`Your search query is ${query}`)
    this.http.searchGithub('search/users',query);
  }

}
