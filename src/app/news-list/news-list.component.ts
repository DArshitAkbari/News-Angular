import { Component, OnInit } from '@angular/core';
import { NewsServicesService } from '../news-services.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newslist = null;
  constructor(private news: NewsServicesService) { }

  ngOnInit(): void {
    this.news.getData().subscribe(
      datas => {
        this.newslist = datas;
        console.log(this.newslist);
        this.newslist=this.newslist.articles;
        console.log(this.newslist);
        
      }
    );
    
  }
}
