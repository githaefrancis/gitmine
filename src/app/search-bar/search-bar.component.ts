import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Keyword } from '../search-keyword/keyword';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  
  newKeyword:Keyword=new Keyword("");
  searchForm=new FormGroup(
    {
      'searchWord':new FormControl('search',Validators.required)
    }
  );
  @Output() searchKey=new EventEmitter<string>()
  
  public searchKeyword(){
    
    if (this.searchForm.valid){
      console.log("submitted");
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>
    this.router.navigate(['search',this.searchForm.get('searchWord')?.value])
    
    );
    this.newKeyword=new Keyword("");
    
    }
    console.log(this.searchForm.get('searchWord')?.value);
  }


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
