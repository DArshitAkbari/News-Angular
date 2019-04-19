import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewsServicesService } from './news-services.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news_list = null;
  ngOnInit(): void {
    this.news.getData().subscribe(

      datas => {
        
        this.news_list = datas;
        console.log(this.news_list);
      }
    );
    // throw new Error("Mesthod not implemented.");
  }
  constructor(private news: NewsServicesService) { }
  title = 'news-App';
}
