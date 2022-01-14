import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  public search(){
    this.router.navigate(['search',4])
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
