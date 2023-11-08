import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessDashboardComponent } from './BusinessUI/business-dashboard/business-dashboard.component';
import { CompanySignupComponent } from './BusinessUI/company-signup/company-signup.component';
import { CompanyLoginComponent } from './BusinessUI/company-login/company-login.component';

import { LandingComponent } from './landing/landing.component';
import { TrackOrderComponent } from './UserUI/track-order/track-order.component';
import { OrderComponent } from './BusinessUI/order/order.component';
import { ProcessComponent } from './BusinessUI/process/process.component';
import { BusinessProductsComponent } from './BusinessUI/business-products/business-products.component';
import { AddProductComponent } from './BusinessUI/add-product/add-product.component';
import { ProductDetailComponent } from './UserUI/product-detail/product-detail.component';
import { CartComponent } from './UserUI/cart/cart.component';
import { WishlistComponent } from './UserUI/wishlist/wishlist.component';

const routes: Routes = [

  {path:'',redirectTo:'landing-page', pathMatch: 'full' },

  { path: 'landing-page', component:LandingComponent},
  { path: 'track-page', component:TrackOrderComponent},
  { path: 'orders', component:OrderComponent},
  { path: 'process', component:ProcessComponent},
  {path: 'dashboard', component:BusinessDashboardComponent},
  { path: "signup", component: CompanySignupComponent},
  {  path: "login", component: CompanyLoginComponent },
  {  path: "my-products", component: BusinessProductsComponent },
  {path: "cart", component: CartComponent},
  {path: "add-product", component: AddProductComponent},
  {path: "product-detail", component: ProductDetailComponent},
  {path: "wish-list", component: WishlistComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
