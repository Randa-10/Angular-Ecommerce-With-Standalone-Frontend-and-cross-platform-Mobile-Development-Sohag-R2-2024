import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsWithApiService {
  // URL:string=`${environment.baseUrl}/products`
  constructor(
    private http: HttpClient //Restful   ===> API URL===>http://localhost:3000/products  , Methods :,GET,PUT,,POST
  ) {}

  getAllProduct(): Observable<Iproduct[]> {
    // return this.http.get<Iproduct[]>('http://localhost:3000/products')
    return this.http.get<Iproduct[]>(`${environment.baseUrl}/products`);
  }
  getProductById(prd: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${environment.baseUrl}/products/${prd}`);
  }
  //query string   http://localhost:3000/products?productName=value

  getProductsAfterSearch(value: string): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(
      `${environment.baseUrl}/products?productName=${value}`
    );
  }
}
