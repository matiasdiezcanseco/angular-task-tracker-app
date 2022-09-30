import { AppComponent } from './app.component'
import { BrowserModule } from '@angular/platform-browser'
import { ButtonComponent } from './components/button/button.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HeaderComponent } from './components/header/header.component'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { TaskItemComponent } from './components/task-item/task-item.component'
import { TasksComponent } from './components/tasks/tasks.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
