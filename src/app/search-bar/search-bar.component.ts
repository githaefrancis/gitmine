import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  keyword:string="";
  public search(){
    this.router.navigate(['search',4])
  }

  searchKeyword(){
    console.log("submitted");
    this.router.navigate(['search',this.keyword])
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
