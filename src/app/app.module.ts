
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';

import { MainService } from './service/main.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewslistComponent,
    DetailpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
