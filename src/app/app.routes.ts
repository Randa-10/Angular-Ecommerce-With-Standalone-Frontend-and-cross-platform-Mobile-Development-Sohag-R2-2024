import { Routes } from '@angular/router';
import { ProductParentComponent } from './components/product-parent/product-parent.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './Guards/auth.guard';
import { SignupReactiveFormComponent } from './components/signup-reactive-form/signup-reactive-form.component';

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
        canActivate:[authGuard]
      }, //dynamic routes
      {path:'products/:idFromUrl',component:ProductDetailsComponent},
      { path: 'signUp', component: SignUpComponent, title: '' },
      { path: 'signUpReative', component: SignupReactiveFormComponent, title: '' },

      { path: 'login', component: LoginComponent, title: '' },


    ],
  },
  //wild card routes
  { path: '**', component: NotfoundComponent }, //404
];
