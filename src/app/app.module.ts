import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from './components/history/history.component';
import { MathComponent } from './components/math/math.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { GeographyComponent } from './components/geography/geography.component';
import { BiologyComponent } from './components/biology/biology.component';
import { NewhomeworkComponent } from './components/newhomework/newhomework.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlingService } from './services/ErrorHandlingService/error-handling.service';
import { CommentComponent } from './components/comment/comment.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    MenuComponent,
    HistoryComponent,
    MathComponent,
    LiteratureComponent,
    GeographyComponent,
    BiologyComponent,
    NewhomeworkComponent,
    CommentComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
