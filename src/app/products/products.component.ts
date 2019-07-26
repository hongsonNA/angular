import { Component, OnInit , } from '@angular/core';
import { DataProduct } from './data';
import  {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import {ProductType} from './products';
import {ProductService} from '../product.service';
@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
 
export class ProductsComponent implements OnInit {
	products : ProductType[];
	selectedProduct : ProductType;

	constructor(
		private productService:ProductService
		) { }
	getProduct(){
		this.products = this.productService.getProducts();
		console.log(this.products);
	}
	addProduct(){
		console.log('add product');
	}


	ngOnInit() {
		this.getProduct();
	}
	onClickMe(){
		// this.product.name='people'
	}
	onKeyUp = event => {
		// this.product.name = event.target.value;
	}
	detailProduct = product => {
		this.selectedProduct = product;

	}
	deleteProduct = productId => {
		console.log(productId)
		this.products = this.products.filter(item => item.id !== productId);
	}
	setClass(){
		return {

		}
	}
}
