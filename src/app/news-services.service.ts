import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  constructor(private httpClient:HttpClient) { }
  configUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f3b456c940cc4908b48cf9ed1f5a797a';

  getData(){
    return this.httpClient.get(this.configUrl);
  }
}
