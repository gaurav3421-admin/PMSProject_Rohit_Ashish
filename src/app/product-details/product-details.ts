import { Component, OnInit, Pipe, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Step 1
import { CommonModule } from '@angular/common';
import { ProductItem,ProductDetailsArray } from '../interfaces/product';
import { pipe } from 'rxjs';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {

  private productService: ProductService | null = inject(ProductService, { optional: true } as any); // Step 1 - Import HttpClient and ProductService
  constructor() { } // Step 2

  productId: string | null = null;
  category: string | null = null;
  products: ProductDetailsArray[] = [];




  //http://localhost:4200/productdetails/5?category=electronics&page=1
  ngOnInit() {

    // 1. Capture Path Parameter (/product/:id)
    //this.productId = this.route.snapshot.paramMap.get('id');

    // 2. Capture Query Parameters (?category=...)
    // Use subscribe if you expect these to change without leaving the page
    //this.route.queryParamMap.subscribe(params => {
    //this.category = params.get('category');

    //});
    this.getAllProducts();

  }

  getAllProducts(): void {
    if (this.productService) {
      this.productService.getAllProductDetails().subscribe({
        next: (productDetails: any) => {
          console.log('Product details fetched successfully:', productDetails);
           this.products=productDetails.products || productDetails;

        },
        error: (error) => {
          console.error('Error fetching product details:', error);
        },
        complete: () => {
          console.log('Product details fetch complete');
        }
      });
    }
  }



}
