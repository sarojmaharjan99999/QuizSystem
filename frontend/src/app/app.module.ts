import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { CookieModule } from 'ngx-cookie';
import { Ng2PaginationModule } from 'ng2-pagination';
import { ModalModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { DashboardComponent } from './admin-dashboard/dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './admin-dashboard/question/question.component';
import { HeaderPageComponent } from './admin-dashboard/header-page/header-page.component';
import { HomePageComponent } from './admin-dashboard/home-page/home-page.component';
import { CategoriesComponent } from './admin-dashboard/categories/categories.component';
import { NewQuizComponent } from './user-dashboard/new-quiz/new-quiz.component';
import { UserHomeComponent } from './user-dashboard/user-home/user-home.component';
import { UserHeaderComponent } from './user-dashboard/user-header/user-header.component';
import { UCategoriesComponent } from './user-dashboard/u-categories/u-categories.component';
import { SecurityComponent } from './security/security.component';
import { SecurityService } from './security/security.service';
import { DeleteQCComponent } from './admin-dashboard/delete-qc/delete-qc.component';
import { ListQuestionsComponent } from './admin-dashboard/list-questions/list-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    QuestionComponent,
    HeaderPageComponent,
    HomePageComponent,
    CategoriesComponent,
    NewQuizComponent,
    UserDashboardComponent,
    UserHomeComponent,
    UserHeaderComponent,
    UCategoriesComponent,
    SecurityComponent,
    DeleteQCComponent,
    ListQuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PaginationModule,
    CookieModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
