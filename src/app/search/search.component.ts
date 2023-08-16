import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm: string = '';
  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.params.subscribe(
      (params) => (this.searchTerm = params['searchTerm'])
    );
  }

  search() {
    this.router.navigateByUrl('/search/' + this.searchTerm);
  }
}
