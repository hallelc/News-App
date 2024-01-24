import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, shareReplay, map, tap } from 'rxjs';
import { NewsItem } from '../models/newsItem';
import { Article, ArticlesList } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  readonly baseUrl = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  getRecentArticles(page :number, pageSize : number, keywords? : string) : Observable<ArticlesList> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("page", page);
    queryParams = queryParams.append("pageSize", pageSize);
    queryParams = queryParams.append("keywords", keywords? keywords : "");

    return this.http.get<ArticlesList>(`${this.baseUrl}/article/recent`, {params:queryParams});
  }
}
