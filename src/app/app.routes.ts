import { Routes } from '@angular/router';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
  //first match wins
  //   { path: '', redirectTo: '/home', pathMatch: 'full' },
  //   { path: 'home', component: HomeComponent, title: 'home page' },
  //   {
  //     path: 'products',
  //     component: ProductParentComponent,
  //     title: 'product page',
  //   },
  //   { path: 'aboutUs', component: AboutUsComponent, title: 'about page' },

  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent, title: 'home page' },
      {
        path: 'products',
        component: ProductParentComponent,
        title: 'product page',
      }, //dynamic routes
      {path:'products/:idFromUrl',component:ProductDetailsComponent},
      { path: 'aboutUs', component: AboutUsComponent, title: 'about page' },
    ],
  },
  //wild card routes
  { path: '**', component: NotfoundComponent }, //404
];
