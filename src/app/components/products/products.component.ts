import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { ImgStyleDirective } from '../../Directives/img-style.directive';
import { ProductStaticService } from '../../services/product-static.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule,CommonModule,DiscountPipe,ImgStyleDirective,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
// product_list:Iproduct={     { }
  //   productName:"product1",
  //   productCatId:1,
  //   productId:1,
  //   productPrice:200,
  //   productQuantity:100,
  //   productImgUrl:"https://f.nooncdn.com/p/pnsku/N70040315V/45/_/1705987883/d8289145-e25c-4a3a-9c75-d3321a415edd.jpg?format=avif&width=240"
  // }
  userName:string="Ahmed"
  toggleImg:boolean=true
  // productsList:Iproduct[]
  TotalOrder:number=0
date:Date=new Date()
//dependency  injection
  constructor(private productServiceStatic:ProductStaticService ,
    private route:Router
  ){
    //initialize data

// this.productsList=[
//   {
//     productId: 1,
//     productName: 'Apple iPhone 15',
//     productImgUrl:
//       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 1,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId: 2,
//     productName: 'Samsung Galaxy frontend ',
//     productImgUrl:
//       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 2,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId: 3,
//     productName: 'Apple iPhone 13',
//     productImgUrl:
//       'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
//     productQuantity: 0,
//     productPrice: 200,
//     categoryId: 1,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId: 4,
//     productName: 'Samsung Galaxy ',
//     productImgUrl:
//       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
//     productQuantity: 1,
//     productPrice: 200,
//     categoryId: 2,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId: 5,
//     productName: 'OPPO Reno 12F 5G ',
//     productImgUrl:
//       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 2,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId: 6,
//     productName: 'iphone',
//     productImgUrl:
//       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 2,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId:7,
//     productName: 'iphone',
//     productImgUrl:
//       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 3,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId: 8,
//     productName: 'Reno 11F',
//     productImgUrl:
//       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 1,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
//   {
//     productId:9,
//     productName: 'iphone',
//     productImgUrl:
//       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
//     productQuantity: 20,
//     productPrice: 200,
//     categoryId: 1,
//     productDetails:
//       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
//   },
// ]
// this.productsList=[]

// this.productsAfterSearch=this.productsList
  }
  ngOnInit(): void {
    // this.productsAfterSearch=this.productsList
    //Day5
    this.productsAfterSearch=this.productServiceStatic.getAllData()

  }


  toggle(){
this.toggleImg=!this.toggleImg
  }

  TotalNumberOrder(qty:string,price:number){
   this.TotalOrder+= +qty*price
  }


  //set vs get 
  //Day3
  productsAfterSearch:Iproduct[]=[]
  //day4
 @Input() set filterByNameInChild(vaule:string){
    // console.log( this.deSearchProduct(vaule));
  //  this.productsAfterSearch=this.deSearchProduct(vaule)
  //Day5
  this.productsAfterSearch=this.productServiceStatic.deSearchProduct(vaule)


  }

  // deSearchProduct(filterValue:string):Iproduct[]{
  //   filterValue=filterValue.toLowerCase()
  //   return  this.productsList.filter((Prd:Iproduct)=>
  //   Prd.productName.toLowerCase().includes(filterValue)
  // )
  // }


  //day4
//create event
@Output() productsInChild:EventEmitter<Iproduct>=new EventEmitter<Iproduct>()

  addToCart(prd:Iproduct){
// console.log(prd);
//fire event
this.productsInChild.emit(prd) 
  }

  //day5
  goDetails(prdId:number){
 this.route.navigate(['products/',prdId])
  }
}
