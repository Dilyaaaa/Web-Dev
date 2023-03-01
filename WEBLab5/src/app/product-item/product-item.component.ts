import { Component,Input,Output,EventEmitter } from '@angular/core';
import { products,Product } from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  products = [...products];
@Input( )selectedProduct:string |undefined;

like(products:Product){
  products.like+=1;
}
  share() {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
