import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todoList/todoList.component';

const routes : Routes = [
  {
    path:'',
    redirectTo:'todoList',
    pathMatch:'full'
  },
  {path: 'todoList', component: TodoListComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
