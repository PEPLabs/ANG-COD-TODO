import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component'; // import TodoComponent here

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent // add TodoComponent to the declarations array
  ],
  imports: [
    BrowserModule,
    FormsModule // add FormsModule for ngModel
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
