import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import {Loan} from '../classes/loan';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {

  constructor(private http: HttpClient) { }

  getMarketPlace(): Observable<Loan[]> {
    return this.http.get<Loan[]>(`${environment.api}/loans/marketplace`);
  }
}
