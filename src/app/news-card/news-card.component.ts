import { Component, Input } from '@angular/core';
import { NewsItem } from '../models/newsItem';
import { Article } from '../models/article';

@Component({
  selector: 'news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent {
  @Input()
  article!: Article;

  constructor() {
  }
}
