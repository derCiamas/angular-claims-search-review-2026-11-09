import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Claim } from './claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  search(_query: string | null): Observable<Claim[]> {
    return of([]);
  }
}
