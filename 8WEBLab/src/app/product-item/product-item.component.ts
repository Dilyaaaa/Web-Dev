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

remove(product:Product){
  for(let i=0; i <products.length;i++){
    if(products[i]==product){
      delete products[i];
      break;
    }
  }
}
  share() {
  }
  kaspi(a:string|URL|undefined){
    window.open("https://kaspi.kz/shop/search")
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
