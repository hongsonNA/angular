import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ProductService } from '../product.service'
import {ProductType} from '../products/products'
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 product : ProductType = new ProductType();

 // @Output('keyAddress') onHandleAddress = new EventEmitter<string>();
  constructor( 
    private productService: ProductService
   ) { }
  getAddress(){
  	// this.onHandleAddress.emit(this.address);
  	// console.log(this.address);
  }
  ngOnInit() {
  }

addProduct(){
  this.productService.addProduct(this.product);
}

}
