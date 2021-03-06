import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthHttpInterceptorServiceService } from './services/basic-auth-http-interceptor-service.service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ProductsComponent } from './component/products/products.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import {MatSelectModule} from '@angular/material/select';
import { AsociateSupplierComponent } from './component/asociate-supplier/asociate-supplier.component';
import { AddReductionComponent } from './component/add-reduction/add-reduction.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserListComponent } from './component/user-list/user-list.component';
import { UpdateUserComponent } from './component/update-user/update-user.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteDialogComponent } from './component/delete-dialog/delete-dialog.component';
import { SupliersComponent } from './component/supliers/supliers.component';
import { AllProductsAdminComponent } from './component/all-products-admin/all-products-admin.component';
import { DeleteArticleDialogComponent } from './component/delete-article-dialog/delete-article-dialog.component';
import { DisableArticleDialogComponent } from './component/disable-article-dialog/disable-article-dialog.component';
import { AddSupplierComponent } from './component/add-supplier/add-supplier.component';

import {MatPaginatorModule} from '@angular/material/paginator';
import { MatProgressSpinnerModule,  } from "@angular/material/progress-spinner";
import { MatSortModule  } from "@angular/material/sort";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    LoginComponent,
    ProductsComponent,
    FooterComponent,
    ProductDetailsComponent,
    AddProductComponent,
    UpdateProductComponent,
    AsociateSupplierComponent,
    AddReductionComponent,
    UserProfileComponent,
    AddUserComponent,
    UserListComponent,
    UpdateUserComponent,
    DeleteDialogComponent,
    SupliersComponent,
    AllProductsAdminComponent,
    DeleteArticleDialogComponent,
    DisableArticleDialogComponent,
    AddSupplierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSortModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:BasicAuthHttpInterceptorServiceService, multi:true},
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    MatSortModule,
  ]
})
export class AppModule { }
