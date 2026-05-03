import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProductService } from '../services/product-service';
import { ProductItem, ProductDetailsArray } from '../interfaces/product';


@Component({
  selector: 'app-rxjsoperators',
  imports: [CommonModule, RouterModule], //Step3-  Register all Community features
  templateUrl: './rxjsoperators.html',
  styleUrl: './rxjsoperators.css',
})
export class RXJSOperators implements OnInit {

  productNames: string[] = [];
  productTitles: string[] = [];
  expensiveProducts: ProductDetailsArray[] = [];
  //safeProducts: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Initialize component
    this.getAllProducts();
    this.fetchExpensiveProducts(500).subscribe((products) => {
      console.log('Expensive Products:', products);
      this.expensiveProducts = products;
    });
  }


  getAllProducts(): void {

    // call fetchProductsTitles
    this.productService.fetchProductsTitles().subscribe(
      (responseData) => {
        this.productNames = responseData;
        console.log('Product Titles:', responseData);
      }
    );

  }
  //switchMap, Filter and catchError Operator Example
  fetchExpensiveProducts(minPrice: number): Observable<ProductDetailsArray[]> {
    return this.productService.getAllProductDetails().pipe(
      switchMap((data: any) => {
        const expensiveProducts = (data.products || data).filter((item: ProductDetailsArray) => typeof item.price === 'number' && item.price > minPrice);
        return of(expensiveProducts);
      }),
      catchError((error) => {
        console.error('Error fetching product details:', error);
        return of([]);
      }),
    );
  }
}