export interface ArticlesList {
    articles: Article[];
    totalResults: number;
}

export interface Article {
    source : Source;
    author : string;
    title: string;
    description: string;
    url : string;
    urlToImage: string;
    publishedAt : Date;
    content : string
}

export interface Source {
    id : number,
    name : string
}