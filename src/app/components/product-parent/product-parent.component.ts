import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-parent',
  imports: [FormsModule, ProductsComponent,CommonModule],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.css',
})
export class ProductParentComponent implements OnInit ,OnChanges ,AfterViewInit{
  // filterByName:string=''
  // filterByName:string|undefined
  // filterByName:string|null=null
  filterByName!: string; // non null assertion
@ViewChild('Ref') Dom!:ElementRef
  productsInParent: Iproduct[] = [];
  AddToCartInParent(prd: Iproduct) {
    let PrdInArr = this.productsInParent.find(
      (Pid) => Pid.productId === prd.productId
    );
    if (PrdInArr) {
      PrdInArr.productQuantity++;
      prd.productQuantity--;
    } else {
      this.productsInParent.push({ ...prd, productQuantity: 1 });
    }
    // console.log();
    console.log(this.productsInParent);
  }
  constructor(){

  }
  ngAfterViewInit(): void {
  //  this.Dom.nativeElement.style
  }
  ngOnChanges(): void {
  
  }
  ngOnInit(): void {
    
  }

}
