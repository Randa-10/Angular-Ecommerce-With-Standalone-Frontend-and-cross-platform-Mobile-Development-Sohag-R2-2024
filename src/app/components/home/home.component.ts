import { Component, OnInit } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ProductStaticService } from '../../services/product-static.service';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  propProduct!:Iproduct[]
constructor(private productList:ProductStaticService){

}
  ngOnInit(): void {
   this.propProduct=this.productList.getAllData()
  }

}
