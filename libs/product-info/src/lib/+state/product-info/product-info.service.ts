import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-info.models';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  baseUrl = 'http://localhost:3000/api/products';
  headers!: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers== new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  }

  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product,{headers:this.headers});
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${id}`, product, {headers:this.headers});
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }
}
