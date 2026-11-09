import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, mergeMap } from 'rxjs/operators';

import { Claim } from './claim.model';
import { ClaimsService } from './claims.service';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html'
})
export class ClaimsListComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  results: Claim[] = [];
  loading = false;

  constructor(private readonly claims: ClaimsService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        mergeMap((query) => {
          this.loading = true;
          return this.claims.search(query);
        })
      )
      .subscribe((results) => {
        this.results = results;
        this.loading = false;
      });
  }

  ngOnDestroy(): void {}
}
