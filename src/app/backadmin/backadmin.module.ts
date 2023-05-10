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
import { AddTestresultComponent } from './testresult-list/add-testresult/add-testresult.component';
import { PdfextractorComponent } from './testresult-list/pdfextractor/pdfextractor.component';
import { LeaveAuthorizationComponent } from './leave-authorization/leave-authorization.component';
import { AddLeaveAuthComponent } from './leave-authorization/add-leave-auth/add-leave-auth.component';
import { DetailsLeaveAuthComponent } from './leave-authorization/details-leave-auth/details-leave-auth.component';
import { EditLeaveAuthComponent } from './leave-authorization/edit-leave-auth/edit-leave-auth.component';
import { ProfileComponent } from './profile/profile.component';
import { AddProfileComponent } from './profile/add-profile/add-profile.component';
import { DetailsProfileComponent } from './profile/details-profile/details-profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { WorkScheduleComponent } from './work-schedule/work-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { InternshipRequestComponent } from './internship-request/internship-request.component';
import { AddtestComponent } from './addtest/addtest.component';


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
    SelectButtonModule
  ],
  bootstrap: [LoginComponent]
})
export class BackadminModule { }
