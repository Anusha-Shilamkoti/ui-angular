import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
	import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CreateIpoComponent } from './create-ipo/create-ipo.component';
import { IpoListComponent } from './ipo-list/ipo-list.component';
import { CreateSectorComponent } from './create-sector/create-sector.component';
import { SectorListComponent } from './sector-list/sector-list.component';
import { CreateStockexchangeComponent } from './create-stockexchange/create-stockexchange.component';
import { StockexchangeListComponent } from './stockexchange-list/stockexchange-list.component';
import { CreateStockpriceComponent } from './create-stockprice/create-stockprice.component';
import { StockpriceListComponent } from './stockprice-list/stockprice-list.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { CompareCompanyComponent } from './compare-company/compare-company.component';
import { HighchartsService } from './compare-company/highcharts.service';
import { ImportDataComponent } from './import-data/import-data.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomePageComponent,
    LoginPageComponent,
    UserListComponent,
    CreateCompanyComponent,
    CompanyListComponent,
    CreateIpoComponent,
    IpoListComponent,
    CreateSectorComponent,
    SectorListComponent,
    CreateStockexchangeComponent,
    StockexchangeListComponent,
    CreateStockpriceComponent,
    StockpriceListComponent,
    AdminComponent,
    UserComponent,
    CompareCompanyComponent,
    ImportDataComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HighchartsChartModule
    
  ],
  providers: [HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
