import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
