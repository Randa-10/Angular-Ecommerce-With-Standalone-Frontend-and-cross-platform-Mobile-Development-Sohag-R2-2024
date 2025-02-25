import { Component, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductStaticService } from '../../services/product-static.service';
import { Iproduct } from '../../Models/iproduct';
import { Location } from '@angular/common';
import { ProductsWithApiService } from '../../services/products-with-api.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  //step1===>get id from url
  // @Input('idFromUrl') currentID!:number
  // @Input() idFromUrl:number=0
  currentID: number = 0;
  ProductObj!: Iproduct;
  myIndex!: number;
  arrOfIds!: number[];
  constructor(
    private router: Router,
    private active: ActivatedRoute,
    private productServiceStatic: ProductStaticService,
    private Loactaion: Location,
    private productsApi:ProductsWithApiService
  ) {
    // this.currentID=Number(this.active.snapshot.paramMap.get('idFromUrl'))||0
    // console.log(this.currentID);
    //routing observable
    this.active.paramMap.subscribe((x) => {
      this.currentID = Number(x.get('idFromUrl')) || 0;
      //step2===>send id to  method

      // let foundProduct = this.productServiceStatic.getproductById(
      //   this.currentID
      // );
      // if (foundProduct) {
      //   this.ProductObj = foundProduct;
      //   console.log(this.ProductObj);
      // } else {
      //   this.router.navigate(['**']); 
      // }
      //Day6
this.productsApi.getProductById(this.currentID).subscribe((data)=>{
  console.log(data);
  this.ProductObj=data
})
    });

    this.arrOfIds = this.productServiceStatic.getAllIds();
    console.log(this.arrOfIds);
    
  }

  prevFunc() {
    // this.myIndex= arr[0]=1
    this.myIndex = this.arrOfIds.indexOf(this.currentID);
    console.log(this.myIndex);
    //arr[--index]
    this.router.navigate(['products/', this.arrOfIds[--this.myIndex]]);
  }
  nextFunc() {
    this.myIndex = this.arrOfIds.indexOf(this.currentID);
    console.log(this.myIndex);
    //arr[--index]
    this.router.navigate(['products/', this.arrOfIds[++this.myIndex]]);
  }
  goBack() {
    this.Loactaion.back();
  }
}
