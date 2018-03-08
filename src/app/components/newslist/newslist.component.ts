import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';

import { MainService } from '../../service/main.service'


@Pipe({ name: 'ObjNgFor', pure: false })
export class ObjNgFor implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    // return Object.keys(this.responseData)//.map(key => value[key]);
  }
}

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.scss']
})
export class NewslistComponent implements OnInit {
  public response: any;
  public responseData: any;
  constructor(public mainService: MainService) { }


  ngOnInit() {

    this.mainService.getData('https://newsapi.org/v1/articles?source=techcrunch&apiKey=9217642749764be796f284c90f320754').subscribe((res) => { 
        this.responseData = res;
        this.responseData = this.responseData.articles;
        console.log(this.responseData);
     });
    // console.log(  Object.keys(this.responseData).length );

  }


}
