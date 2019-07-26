import { Injectable } from '@angular/core';
import {ProductType} from './products/products';
import { DataProduct} from './products/data';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private products = DataProduct;

  constructor(){ }

  getProducts() : ProductType[]{
  	return this.products;
  }
  addProduct(product){
  	const newProduct = {id : this.products.length +1, ...product};
  	this.products.push(newProduct);

  }
}
