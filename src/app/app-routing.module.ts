import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MenuComponent } from './components/menu/menu.component';
import { HistoryComponent } from './components/history/history.component';
import { LiteratureComponent } from './components/literature/literature.component';
import { MathComponent } from './components/math/math.component';
import { GeographyComponent } from './components/geography/geography.component';
import { BiologyComponent } from './components/biology/biology.component';
import { NewhomeworkComponent } from './components/newhomework/newhomework.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostComponent } from './components/post/post.component';
import { HomeworkComponent } from './components/homework/homework.component';

const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'forum/math', component: MathComponent },
  { path: 'forum/history', component: HistoryComponent },
  { path: 'forum/literature', component: LiteratureComponent },
  { path: 'forum/geography', component: GeographyComponent },
  { path: 'forum/biology', component: BiologyComponent },
  { path: 'newhomework', component: NewhomeworkComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'forum', component: PostComponent },
  { path: 'forum/post', component: CommentComponent },
  { path: 'homework', component: HomeworkComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
