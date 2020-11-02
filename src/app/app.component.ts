import { Component } from '@angular/core';

import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: WikipediaService) {}

  onTerm(term: string): void {
    this.service.search(term).subscribe((response: any) => {
      console.log(response);
    });
  }
}
