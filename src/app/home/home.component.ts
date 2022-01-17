import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http-client/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  focusSearch(){
    var searchField=document.getElementById('search');
    if(searchField){
      searchField.focus()
    }
  
    
  }
  constructor(private gitUserService:HttpService) { 


  }

  ngOnInit(): void {

    // this.gitUserService.searchGithub('search/users','githaefrancis');
  }

}
