import { Component, OnInit } from '@angular/core';
import { DataProduct } from './data';
import  {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	products = DataProduct;
	selectedProduct : ProductType;
	constructor() { }

	ngOnInit() {
	}
	onClickMe(){
		// this.product.name='people'
	}
	onKeyUp = event => {
		// this.product.name = event.target.value;
	}
	detailProduct = product => {
		console.log(product);
		this.selectedProduct = product;

	}
	deleteProduct = productId => {
		console.log(productId)
		this.products = this.products.filter(item => item.id !== productId);
	}
}
