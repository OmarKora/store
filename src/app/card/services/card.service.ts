import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _HttpClient = inject(HttpClient)

  orderCard(data: any):Observable<any> {
   return this._HttpClient.post<any>(`${environment.baseApi}carts`, data)
  }
}
