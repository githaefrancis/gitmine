import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  keyword:string="";

  @Output() searchKey=new EventEmitter<string>()
  public search(){
    
    this.router.navigate(['search',4]);
    
    console.log(this.keyword);
  }

  searchKeyword(){
    console.log("submitted");
    this.router.navigate(['search',this.keyword])
    this.searchKey.emit(this.keyword);
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
