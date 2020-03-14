import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
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
import { ImportDataComponent } from './import-data/import-data.component';



const routes: Routes = [
  {path:"",component:HomePageComponent},
  {path:"home-page",component:HomePageComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"login-page",component:LoginPageComponent},
  {path:"user-list",component:UserListComponent},
  {path:"create-company", component:CreateCompanyComponent},
  {path:"company-list", component:CompanyListComponent},
  {path:"create-ipo", component:CreateIpoComponent},
  {path:"ipo-list", component:IpoListComponent},
  {path:"create-sector", component:CreateSectorComponent},
  {path:"sector-list", component:SectorListComponent},
  {path:"create-stockexchange", component:CreateStockexchangeComponent},
  {path:"stockexchange-list", component:StockexchangeListComponent},
  {path:"create-stockprice", component:CreateStockpriceComponent},
  {path:"stockprice-list", component:StockpriceListComponent},
  {path:"admin", component:AdminComponent},
  {path:"user", component:UserComponent},
  {path:"compare-company", component:CompareCompanyComponent},
  {path:"import-data", component:ImportDataComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
