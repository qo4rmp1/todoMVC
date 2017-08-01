import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipePipe } from './filter-pipe.pipe';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
