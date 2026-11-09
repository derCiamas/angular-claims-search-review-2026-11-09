import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Claim } from './claim.model';

@Injectable({
  providedIn: 'root'
})
export class ClaimsService {
  constructor(private readonly http: HttpClient) {}

  search(query: string | null): Observable<Claim[]> {
    const params = new HttpParams().set('query', query ?? '');
    return this.http.get<Claim[]>('/api/claims', { params });
  }
}
