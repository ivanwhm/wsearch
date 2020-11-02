import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor() {}

  search(term: string): string {
    return `I am Wikipedia search results. Search term: ${term}`;
  }
}
