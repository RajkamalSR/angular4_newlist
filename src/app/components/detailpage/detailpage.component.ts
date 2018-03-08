import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {

  public response: any;
  public responseData: any;

  constructor(public route: ActivatedRoute, public mainService: MainService) { }
  id: number;
  private sub: any;
  ngOnInit() {

    this.mainService.getData('https://newsapi.org/v1/articles?source=techcrunch&apiKey=9217642749764be796f284c90f320754').subscribe((res) => {
      this.responseData = res;
      this.responseData = this.responseData.articles;
      console.log(this.responseData);
    });


    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });

    console.log(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
