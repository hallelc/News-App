import { Component, HostListener } from '@angular/core';
import { NewsService } from './services/news.service';
import { Article } from './models/article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News App';
  today = new Date();
  news: Article[] = [];
  totalResults = 0;
  keyword : string = "";
  pageCounter = 1;
  pageSize = 15;
  allLoaded = false;
  isLoading = false;

  constructor(private newsService: NewsService) {
  }

  ngOnInit() {
    this.getArticles();
  }

  onSearch(keyWord : string) {
    this.keyword = keyWord;
    this.pageCounter = 1;
    this.getArticles();
  }

  getArticles() {
    this.isLoading = true;
    this.newsService.getRecentArticles(this.pageCounter,this.pageSize,this.keyword).subscribe(res => {   
      if(this.pageCounter > 1) {
        this.news.push(...res.articles);
      } else {
        this.news = res.articles;
      }
      
      this.isLoading = false;
      this.totalResults = res.totalResults;
      this.allLoaded = this.pageCounter*this.pageSize >= this.totalResults;
    });
  }

  loadMore() {
      this.pageCounter++;
      this.getArticles();
    }
  }
