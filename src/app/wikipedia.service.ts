import { Injectable } from '@angular/core';

const WIKIPEDIA_URL = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  search(term: string): string {
    return `I am Wikipedia search results. Search term: ${term}`;
  }
}
