import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Claim } from './claim.model';

@Component({
  selector: 'app-claims-list',
  templateUrl: './claims-list.component.html'
})
export class ClaimsListComponent implements OnInit, OnDestroy {
  searchControl = new FormControl('');
  results: Claim[] = [];
  loading = false;

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
