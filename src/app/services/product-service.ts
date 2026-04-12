import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Step 1 - Import HttpClient and HttpErrorResponse
import { ProductDetailsArray } from '../interfaces/product';
import { Observable, of  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiURLProductDetails = 'https://dummyjson.com/products'; // API base enpoint'

  constructor() { }

  private httpClientRequest: HttpClient | null = inject(HttpClient, { optional: true } as any); // Step 1 - Import HttpClient and HttpErrorResponse
  private _productItem: Observable<ProductDetailsArray> | null = null;


 // GET Method to fetch product details by ID
  getAllProductDetails(): Observable<ProductDetailsArray[]> {
    console.log("This is service Method :getAllProducts() calling");
    if (this.httpClientRequest) {
      
       // Return array of object (Product) 
      // T - ProductItem[]
      // Return  Observable <T>  : Observable <ProductItem[]> 
      return this.httpClientRequest.get<ProductDetailsArray[]>(this.apiURLProductDetails);


    } else {
      return of([]);
    }

 }

 // GET Method to fetch product details by ID
 getProductDetailsByID( productId: number): void {
  
 }
 // GET Method to search product details
 SearchProductDetails( searchText:string) :void {

 }

 // POST Method to insert product details
 InsertProductDetails( productData: any): void {

 }

 // DELETE Method to remove product details by ID
 DeleteProductDetailsByID( productId: number): void {
  
 }

 // PUT Method to update product details by ID
 UpdateProductDetailsByID( productId: number): void {
  
 }

 





}
