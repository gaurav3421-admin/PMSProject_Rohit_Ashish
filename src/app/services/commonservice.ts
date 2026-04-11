import { Injectable } from '@angular/core';
import { of } from 'rxjs';



@Injectable({

  providedIn: 'root',

})

export class Commonservice {

  constructor() { }


  getProductCategory(): any {

    const ProductCategoryList = [
      { id: 1, productCategory: 'beauty' },
      { id: 2, productCategory: 'clothes' },
      { id: 3, productCategory: 'electronics' },
      { id: 4, productCategory: 'books' }
    ]
    return of(ProductCategoryList)



  }

}
