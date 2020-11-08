import { Component } from '@angular/core';

import { WikipediaSearchResponse, WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchData: WikipediaSearchResponse[] = [];

  constructor(private service: WikipediaService) {}

  onTerm(term: string): void {
    this.service.search(term).subscribe((response: WikipediaSearchResponse[]) => {
      this.searchData = response;
    });
  }
}
