export interface Dimensions {
  width?: number;
  height?: number;
  depth?: number;
}
export interface Category {
  id: number;
  productCategory: string;
}
export interface Product {
    id: number;
    title: string;
    description?: string;
    category?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    tags?: string[];
    brand?: string;
    sku?: string;
    weight?: number;
    dimensions?: Dimensions;
    warrantyInformation?: string;
    shippingInformation?: string;
    availabilityStatus?: string;
    
}

export interface ProductDetailsArray {
    id: number;
    title: string;
    description?: string;
    category?: string;
    price?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    tags?: string[];
    brand?: string;
    sku?: string;
    weight?: number;
    dimensions?: Dimensions;
    warrantyInformation?: string;
    shippingInformation?: string;
    availabilityStatus?: string;
  
}
export interface ProductItem {
    id: number;
    title: string;
    description: string;
    category: string;

}


type ISODateString = string;

/**
 * Interface representing a Product entity.
 */
export interface IProductDelete {
  id: number;
  title: string;
  // You should add other properties here based on your actual data structure
  // Example placeholder for other data:
  description?: string;
  price?: number;
  category?: string;

  isDeleted: boolean;
  /**
   * The timestamp when the item was deleted, present only if isDeleted is true.
   */
  deletedOn?: ISODateString; // The '?' makes this property optional
}
