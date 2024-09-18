import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RealEstateManagerService {
  baseApiUrl: string =
    'https://api.real-estate-manager.redberryinternship.ge/api/';

  private token = "9d09e4aa-4933-4182-9c8e-11261f6e6016";

  constructor(private http: HttpClient) {}

  getAgents(): Observable<any>{
  const headers = { Authorization: `Bearer ${this.token}` };
    return this.http.get<any>(this.baseApiUrl + "agents", {
      headers,
    });
  }
}
