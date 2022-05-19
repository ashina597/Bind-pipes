import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { SummaryPipe } from './summary.pipe';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { ReverseStringPipe } from './reverse-string.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    SummaryPipe,
    SearchPipe,
    ReverseStringPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
