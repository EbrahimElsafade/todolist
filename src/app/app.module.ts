import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todoList/todoList.component';

import { TodoListService } from './services/todo.service';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { AppRoutingModule } from './app-routing.module';


import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
