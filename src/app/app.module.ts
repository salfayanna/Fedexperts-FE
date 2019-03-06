import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from './components/history/history.component';
import { MathComponent } from './components/math/math.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { GeographyComponent } from './components/geography/geography.component';
import { BiologyComponent } from './components/biology/biology.component';
import { NewhomeworkComponent } from './components/newhomework/newhomework.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MenuComponent,
    HistoryComponent,
    MathComponent,
    LiteratureComponent,
    GeographyComponent,
    BiologyComponent,
    NewhomeworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
