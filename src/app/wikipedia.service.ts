import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

const WIKIPEDIA_URL = 'https://pt.wikipedia.org/w/api.php';

interface WikipediaResponse {
  query: {
    search: WikipediaSearchResponse[];
  };
}

export interface WikipediaSearchResponse {
  pageid: number;
  snippet: string;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<WikipediaSearchResponse[]> {
    return this.http
      .get<WikipediaResponse>(WIKIPEDIA_URL, {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
