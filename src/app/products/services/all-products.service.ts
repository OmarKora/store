import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  private _HttpClient=inject(HttpClient)

getAllProducts():Observable<any>{
return this._HttpClient.get( environment.baseApi+'products')
}
getAllCategories():Observable<any>{
  return this._HttpClient.get(environment.baseApi+'products/categories')
}
getSpecificCategory(data:string):Observable<any>{
return this._HttpClient.get( environment.baseApi+`products/category/${data}`)
}
getDetails(id:number):Observable<any>{
return this._HttpClient.get( environment.baseApi+`products/${id}`)
}

}
