import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
 address : string;
 @Output('keyAddress') onHandleAddress = new EventEmitter<string>();
  constructor() { }
  getAddress(){
  	this.onHandleAddress.emit(this.address);
  	console.log(this.address);
  }
  ngOnInit() {
  }

}
