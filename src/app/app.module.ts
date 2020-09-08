import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CaseStudy1Component } from './case-study1/case-study1.component';
import { Tab1Component } from './case-study1/tab1/tab1.component';
import { Tab2Component } from './case-study1/tab2/tab2.component';
import { Tab3Component } from './case-study1/tab3/tab3.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CaseStudy1Component,
    Tab1Component,
    Tab2Component,
    Tab3Component
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
