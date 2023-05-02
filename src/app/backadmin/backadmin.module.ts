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
import { SampleListComponent } from './sample-list/sample-list.component';
import { AddSampleComponent } from './sample-list/add-sample/add-sample.component';
import { UpdateSampleComponent } from './sample-list/update-sample/update-sample.component';
import { DetailsSampleComponent } from './sample-list/details-sample/details-sample.component';
import { TestresultListComponent } from './testresult-list/testresult-list.component';
import { AddTestresultComponent } from './Testresult-list/add-testresult/add-testresult.component';
import { TestsComponent } from './tests/tests.component';
import { AddTesttComponent } from './tests/add-testt/add-testt.component';
import { AnalysisStatistiqueComponent } from './analysis-statistique/analysis-statistique.component';
import { PdfextractorComponent } from './Testresult-list/pdfextractor/pdfextractor.component';
import { UpdateTesttComponent } from './tests/update-testt/update-testt.component';

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
    UpdateTesttComponent
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
