import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Step 1 - Import HttpClient and HttpErrorResponse
import { ProductDetailsArray, ProductItem, Product, IProductDelete } from '../interfaces/product';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ObjectEncodingOptions } from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private apiURLProductDetails = 'https://dummyjson.com/products'; // API base enpoint'
  private apiURLProductAdd = 'https://dummyjson.com/products/add'; // API base enpoint'
  private apiURLUpdateProduct = 'https://dummyjson.com/products';
  private apiURLDeleteProduct = 'https://dummyjson.com/products';


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
  getProductDetailsByID(productId: number): Observable<ProductDetailsArray | null> {
    console.log("This is service Method :getProductDetailsByID() calling");
    if (this.httpClientRequest) {

      // Return array of object (Product) 
      // T - ProductItem[]
      // Return  Observable <T>  : Observable <ProductItem[]> 
      return this.httpClientRequest.get<ProductDetailsArray>(`${this.apiURLProductDetails}/${productId}`);


    } else {
      return of(null);
    }

  }
  // GET Method to search product details
  SearchProductDetails(searchText: string): void {

  }

  // POST Method to insert product details
  InsertProductDetails(productData: Product): Observable<Product> {

    if (this.httpClientRequest) {
      // Return array of object (Product) 
      // T - ProductItem[]
      return this.httpClientRequest.post<Product>(this.apiURLProductAdd, productData);

    } else {
      return of(productData as Product);
    }



  }

  // 'https://dummyjson.com/products/1'
  //Updating a product will not update it into the server. It will simulate a PUT/PATCH request and will return updated product with modified data
  UpdateProductDetailsByID(productID: number, product: Product): Observable<Product | null> {
    if (this.httpClientRequest) {
      return this.httpClientRequest.put<Product>(`${this.apiURLUpdateProduct}/${productID}`, product);
    } else {
      return of(null);
    }
  }

  // DELETE Method to remove product details by ID
  //https://dummyjson.com/products/1
  DeleteProductDetailsByID(productId: number): Observable<IProductDelete | null> {
    if (this.httpClientRequest) {
      return this.httpClientRequest.delete<IProductDelete | null>(`${this.apiURLDeleteProduct}/${productId}`);
    } else {
      return of(null);
    }

  }


  // MAP Operator
  fetchProductsTitles(): Observable<string[]> {

    console.log("This is service Method :getAllProducts() calling");
    if (this.httpClientRequest) {
      return this.httpClientRequest.get<ProductItem[]>(this.apiURLProductDetails).pipe(map(
        (data: any) => (data.products || data).map((item: ProductItem) => item.title)
      ));
    } else {
      return of([]);
    }

  }

}





