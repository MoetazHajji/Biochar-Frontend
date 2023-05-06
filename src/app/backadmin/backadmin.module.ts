import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackadminRoutingModule } from './backadmin-routing.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { TableModule } from "primeng/table";
import { ButtonModule } from 'primeng/button';
import { AddProductComponent } from './product-list/add-product/add-product.component';
import { MultiSelectModule } from "primeng/multiselect";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { DialogModule } from "primeng/dialog";
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { FieldsetModule } from "primeng/fieldset";
import { SplitterModule } from "primeng/splitter";
import { CheckboxModule } from "primeng/checkbox";
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from "primeng/avatar";
import { CardModule } from "primeng/card";
import { SelectButtonModule } from "primeng/selectbutton";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProductComponent } from './product-list/edit-product/edit-product.component';
import { DetailsProductComponent } from './product-list/details-product/details-product.component';
import { LoginComponent } from './login/login.component';
import { StockComponent } from './stock/stock.component';
import { ListTimeoffComponent } from './timeoff-component/list-timeoff/list-timeoff.component';
import { AddTimeoffComponent } from './timeoff-component/add-timeoff/add-timeoff.component';
import { EditTimeoffComponent } from './timeoff-component/edit-timeoff/edit-timeoff.component';
import { DetailsTimeoffComponent } from './timeoff-component/details-timeoff/details-timeoff.component';
import { TimeoffmodalComponent } from './timeoff-component/timeoffmodal/timeoffmodal.component';
import { ListAccountComponent } from './account-component/list-account/list-account.component';
import { DetailsAccountComponent } from './account-component/details-account/details-account.component';
import { DetailsHrAccountComponent } from './account-component/details-hr-account/details-hr-account.component';
import { EditGlobalAccountComponent } from './account-component/edit-global-account/edit-global-account.component';
import { UploadModalImgAccountComponent } from './account-component/upload-modal-img-account/upload-modal-img-account.component';
import { AddAppointmentComponent } from './appointment-component/add-appointment/add-appointment.component';
import { ListAppointmentComponent } from './appointment-component/list-appointment/list-appointment.component';
import { SignInAuthenticationComponent } from './authentication-component/sign-in-authentication/sign-in-authentication.component';
import { SignUpAuthenticationComponent } from './authentication-component/sign-up-authentication/sign-up-authentication.component';
import { MessageBoxAuthenticationComponent } from './authentication-component/message-box-authentication/message-box-authentication.component';
import { ForgotPasswordAuthenticationComponent } from './authentication-component/forgot-password-authentication/forgot-password-authentication.component';
import { EditForgotPasswordAuthenticationComponent } from './authentication-component/edit-forgot-password-authentication/edit-forgot-password-authentication.component'; 

@NgModule({
  declarations: [
    SideBarComponent,
    ProductListComponent,
    AdminLayoutComponent,
    HeaderComponent,
    AddProductComponent,
    EditProductComponent,
    DetailsProductComponent,
    LoginComponent,
    StockComponent,
    ListTimeoffComponent,
    AddTimeoffComponent,
    EditTimeoffComponent,
    DetailsTimeoffComponent,
    TimeoffmodalComponent,
    ListAccountComponent,
    DetailsAccountComponent,
    DetailsHrAccountComponent,
    EditGlobalAccountComponent,
    UploadModalImgAccountComponent,
    AddAppointmentComponent,
    ListAppointmentComponent,
    SignInAuthenticationComponent,
    SignUpAuthenticationComponent,
    MessageBoxAuthenticationComponent,
    ForgotPasswordAuthenticationComponent,
    EditForgotPasswordAuthenticationComponent 
  ],
  imports: [
    CommonModule,
    BackadminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    ToastModule,
    DropdownModule,
    DialogModule,
    MenuModule,
    RippleModule,
    FieldsetModule,
    SplitterModule,
    CheckboxModule,
    AutoCompleteModule,
    AvatarModule,
    CardModule,
    SelectButtonModule
  ],
  bootstrap: [LoginComponent]
})
export class BackadminModule { }
