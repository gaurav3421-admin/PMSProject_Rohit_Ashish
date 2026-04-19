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
  //expensiveProducts: ProductItem[] = [];
  //safeProducts: ProductItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // Initialize component
    this.getAllProducts();
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
}