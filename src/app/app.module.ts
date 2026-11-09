import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClaimsListComponent } from './claims/claims-list.component';

@NgModule({
  declarations: [AppComponent, ClaimsListComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
