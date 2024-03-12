import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, // Add CommonModule to your imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
