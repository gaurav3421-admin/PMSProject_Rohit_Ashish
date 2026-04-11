import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms


@Component({
  selector: 'app-product-search',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-search.html',
  styleUrl: './product-search.css',
})
export class ProductSearch implements OnInit {

  searchText: string = '';
  isLoading = false;
  errorMessage = '';

  // initialize product with full shape so template bindings don't read null
  product: any = {
    id: null,
    title: '',
    brand: '',
    description: '',
    category: '',
    sku: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: null,
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    tags: '', // template expects a comma-separated string
    weight: null,
    dimensions: {
      width: null,
      height: null,
      depth: null
    },
    warrantyInformation: '',
    shippingInformation: '',
    meta: {
      createdAt: '',
      updatedAt: '',
      barcode: ''
    },
    thumbnail: '',
    images: []
  };

  isProductAdded = false;
  message = '';
  alertType: 'success' | 'error' | 'info' = 'success';

  // Constructor
  constructor() { };

  ngOnInit() {
    // Initialize any data or state here
  }
  SearchProduct() {
    console.log('Searching for product:', this.searchText);
    if (!this.searchText.trim()) {
      this.errorMessage = 'Please enter product name!';
      this.product = null;
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    
  }

}
