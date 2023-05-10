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
import { SampleListComponent } from './sample-list/sample-list.component';
import { AddSampleComponent } from './sample-list/add-sample/add-sample.component';
import { UpdateSampleComponent } from './sample-list/update-sample/update-sample.component';
import { DetailsSampleComponent } from './sample-list/details-sample/details-sample.component';
import { TestresultListComponent } from './testresult-list/testresult-list.component';
import { TestsComponent } from './tests/tests.component';
import { AddTesttComponent } from './tests/add-testt/add-testt.component';
import { AnalysisStatistiqueComponent } from './analysis-statistique/analysis-statistique.component';
import { UpdateTesttComponent } from './tests/update-testt/update-testt.component';
import { TrainingAdminComponent } from './training-admin/training-admin.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TrainingsListComponent } from './trainings-list/trainings-list.component';
import { AddStockComponent } from './stock/add-stock/add-stock.component';
import { EditStockComponent } from './stock/edit-stock/edit-stock.component';
import { DetailsStockComponent } from './stock/details-stock/details-stock.component';
import { OrderComponent } from './order/order.component';
import { PanierComponent } from './order/panier/panier.component';
import { DetailsOrderComponent } from './order/details-order/details-order.component';
import { OfferComponent } from './offer/offer.component';
import { AddTestresultComponent } from './testresult-list/add-testresult/add-testresult.component';
import { PdfextractorComponent } from './testresult-list/pdfextractor/pdfextractor.component';
import { MidcalcardListComponent } from './midcalcard-list/midcalcard-list.component';
import { AddMedicalcardComponent } from './midcalcard-list/add-medicalcard/add-medicalcard.component';
import { UpdateMedicalcardComponent } from './midcalcard-list/update-medicalcard/update-medicalcard.component';
import { LeaveAuthorizationComponent } from './leave-authorization/leave-authorization.component';
import { AddLeaveAuthComponent } from './leave-authorization/add-leave-auth/add-leave-auth.component';
import { DetailsLeaveAuthComponent } from './leave-authorization/details-leave-auth/details-leave-auth.component';
import { EditLeaveAuthComponent } from './leave-authorization/edit-leave-auth/edit-leave-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { DetailsProfileComponent } from './profile/details-profile/details-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { AddWsComponent } from './work-schedule/add-ws/add-ws.component';
import { CertificateComponent } from './certificate/certificate.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DemandsComponent } from './demands/demands.component';
import { EditUsersAuthenticationComponent } from './authentication-component/edit-users-authentication/edit-users-authentication.component';
import { ModalEditUsersAuthenticationComponent } from './authentication-component/modal-edit-users-authentication/modal-edit-users-authentication.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { InternshipRequestComponent } from './internship-request/internship-request.component';
import { AddtestComponent } from './addtest/addtest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    SampleListComponent,
    AddSampleComponent,
    UpdateSampleComponent,
    DetailsSampleComponent,
    TestresultListComponent,
    AddTestresultComponent,
    TestsComponent,
    AddTesttComponent,
    AnalysisStatistiqueComponent,
    PdfextractorComponent,
    UpdateTesttComponent,
    TrainingAdminComponent,
    TrainingsListComponent,
    AddStockComponent,
    EditStockComponent,
    DetailsStockComponent,
    LeaveAuthorizationComponent,
    AddLeaveAuthComponent,
    DetailsLeaveAuthComponent,
    EditLeaveAuthComponent,
    ProfileComponent,
    AddProfileComponent,
    DetailsProfileComponent,
    EditProfileComponent,
    WorkScheduleComponent,
    OrderComponent,
    PanierComponent,
    DetailsOrderComponent,
    OfferComponent,
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
    EditForgotPasswordAuthenticationComponent,
    MidcalcardListComponent,
    AddMedicalcardComponent,
    UpdateMedicalcardComponent,
    AddWsComponent,
    CertificateComponent,
    DemandsComponent,
    UpdateMedicalcardComponent,
    EditUsersAuthenticationComponent,
    ModalEditUsersAuthenticationComponent,
    WorkScheduleComponent,
    InternshipListComponent,
    InternshipRequestComponent,
    AddtestComponent,
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
    SelectButtonModule,
    NgxPaginationModule
  ],
  bootstrap: [LoginComponent]
})
export class BackadminModule { }
