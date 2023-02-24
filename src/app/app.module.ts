import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarComponent } from './common/menubar/menubar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MaterialModule } from './material/material.module';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './pages/home/services/services.component';
import { DetailsComponent } from './pages/home/services/details/details.component';
import { FeedbackComponent } from './pages/about/feedback/feedback.component';
import { FilterFeedbackPipe } from './pipes/filter-feedback.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/about/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ContactBoxComponent,
    ServicesComponent,
    DetailsComponent,
    FeedbackComponent,
    FilterFeedbackPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
