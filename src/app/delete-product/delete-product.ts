import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductService } from '../services/product-service'; // Import the service to fetch product categories
import { response } from 'express';



@Component({
  selector: 'app-delete-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-product.html',
  styleUrl: './delete-product.css',
})
export class DeleteProduct implements OnInit {

  searchText: string = '';
  //product: any = null;
  isLoading = false;
  errorMessage = '';
  isProductDeleted = false;
  message: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';
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



  // Constructor
  constructor(private _productService: ProductService) { };

  ngOnInit() {

  }


  SearchProduct() {
    console.log('Searching for product:', this.searchText);
    if (this.searchText.trim()) {


      this._productService.getProductDetailsByID(Number(this.searchText)).subscribe({
        next: (data: any) => {
          this.product = data;
          this.errorMessage = '';
          this.isLoading = false;
          console.log('Product details fetched successfully:', this.product);

        },
        error: (error) => {
          console.error("Error fetching product details:", error);
          this.errorMessage = 'Product not found!';
          this.product = null;
        }
      });




    }
  }

  //Method to handle form submission
  deleteProductDetails(deletedProductForm: NgForm) {
    if (deletedProductForm.valid) {
      this._productService.DeleteProductDetailsByID(Number(this.searchText)).subscribe({
        next: (response: any) => {
          // Business Operation 
          console.log("Product deleted successfully:", response);
          this.alertType = 'success';
          this.isProductDeleted = true;
          this.message = "Success!:-Product details have been deleted successfully. Product ID:= " + response?.id + " and product Title:= " + response?.title + " and isDeleted := " + response?.isDeleted + " and deletedOn := " + response?.deletedOn;
        },
        error: (error) => {
          // Exception Handling 
          console.error("Error deleting product:", error);
          this.isProductDeleted = true;
          this.alertType = "error";
          this.message = "Error deleting product.";
        },
        complete: () => {
//          this.message = 'Product deleted successfully!';
  //        this.alertType = 'success';
        }

      });


    } else {
      console.log("form is not valid");
    }


  }

}


