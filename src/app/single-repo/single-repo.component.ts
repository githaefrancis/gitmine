import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../http-client/http.service';
import { Repository } from '../repository-class/repository';

@Component({
  selector: 'app-single-repo',
  templateUrl: './single-repo.component.html',
  styleUrls: ['./single-repo.component.css']
})
export class SingleRepoComponent implements OnInit {
  singleRepo: Repository[];
  constructor(private repoService: HttpService, private route: ActivatedRoute) {
    this.singleRepo = []
  }

  ngOnInit(): void {

    let username = this.route.snapshot.paramMap.get('login');
    let repoName = this.route.snapshot.paramMap.get('repoName');

    this.repoService.searchGithub('repos', `/${username}/${repoName}`);
    this.singleRepo = this.repoService.singleRepo;
  }

}
