import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-repo',
  templateUrl: './single-repo.component.html',
  styleUrls: ['./single-repo.component.css']
})
export class SingleRepoComponent implements OnInit {

  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
