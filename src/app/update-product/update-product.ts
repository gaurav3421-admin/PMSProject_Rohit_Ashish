import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { ProductService } from '../services/product-service'; // Import the service to fetch product categories


@Component({
  selector: 'app-update-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct {


  searchText: string = '';
  //product: any = null;
  isLoading = false;
  errorMessage = '';
  isProductAdded = false;
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


  // Consructor
  constructor(private _productService: ProductService) { };

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
    updateProductDetails(updateProductForm: NgForm) {
      if (updateProductForm.valid) {

        // Call the service method to update product details
        this._productService.UpdateProductDetailsByID(this.product.id, updateProductForm.value).subscribe({
          next: (data) => {
            this.message = 'Product updated successfully!';
            this.alertType = 'success';
            this.isProductAdded = true;
            console.log('Product updated successfully:', data);
            this.message = 'Product updated successfully! ' + data?.title;
            
          },
          error: (error) => {
            console.error('Error updating product:', error);
            this.message = 'Error updating product!';
            this.alertType = 'error';
          }
        });

      } else {
        console.log("form is not valid");
      }


    }




  }
