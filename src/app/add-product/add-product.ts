import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // teamplate-driven forms
import { NgForm } from '@angular/forms'; // Import NgForm for template-driven forms
import { CommonModule } from '@angular/common'; // for directives like ngIf, ngFor
import { Commonservice } from '../services/commonservice'; // Import the service to fetch product categories
import { ProductService } from '../services/product-service'; // Import the service to fetch product categories


@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct implements OnInit {

  // Class Variables

  isProductAdded = false;
  responseMessage: string = '';
  alertType: 'success' | 'error' | 'info' | '' = '';
  product = {
    title: '',
    description: '',
    category: '',
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    tags: '',
    brand: '',
    sku: '',
    weight: null,
    width: null,
    height: null,
    depth: null,
    warrantyInformation: '',
    shippingInformation: '',
    availabilityStatus: '',
    returnPolicy: '',
    minimumOrderQuantity: null
  };
  productCategories: any[] = [];
  constructor(private _commonservice: Commonservice, private _productService: ProductService) { };

  ngOnInit() {
    this._commonservice.getProductCategory().subscribe({
      next: (data: any[]) => {
        this.productCategories = data;
        console.log('Product Categories fetched successfully');
        console.log(this.productCategories);
      },
      error: (error: any) => {
        console.error("Error fetching product categories:", error);
      },
      complete: () => {
        console.log("Product category fetching completed");
      }
    });

  }
  //Method to handle form submission
  addProductDetails(addProductForm: NgForm) {

    if (addProductForm.valid) {

      this._productService.InsertProductDetails(addProductForm.value).subscribe({
        next: (response: any) => {
          this.isProductAdded = true;
          this.alertType = 'error';
          //console.log("Product added successfully:", response);
          this.responseMessage = 'Product added successfully! with ID ' + response.id + ' Product Title: ' + response.title;
          //this.clearForm();
        },
        error: (error: any) => {
          console.error("Error adding product:", error);
          this.isProductAdded = true;
          this.alertType = 'error';
        },
        complete: () => {
          console.log("Product addition completed");
        }
      });
    }

  }


  clearForm(): void {

    this.product = {
      title: '',
      description: '',
      category: '',
      price: null,
      discountPercentage: null,
      rating: null,
      stock: null,
      tags: '',
      brand: '',
      sku: '',
      weight: null,
      width: null,
      height: null,
      depth: null,
      warrantyInformation: '',
      shippingInformation: '',
      availabilityStatus: '',
      returnPolicy: '',
      minimumOrderQuantity: null
    };
  }
}