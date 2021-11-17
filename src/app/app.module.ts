import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { FooterComponent } from './Components/footer/footer.component';
import { TransactionFaildComponent } from './Components/transaction-faild/transaction-faild.component';
import { TransactionSuccessComponent } from './Components/transaction-success/transaction-success.component';
import { TotalTransactionComponent } from './Components/total-transaction/total-transaction.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { PrimengstylesModule } from './primengstyles/primengstyles.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Components/header/header.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    SideNavComponent,
    FooterComponent,
    TransactionFaildComponent,
    TransactionSuccessComponent,
    TotalTransactionComponent,
    HomePageComponent,
    LoginPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengstylesModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
