import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsStatusService } from './news-status.service';
import { RouterModule, Routes } from '@angular/router';
import { EditorViewComponent } from './editor-view/editor-view.component';
import { AgentViewComponent } from './agent-view/agent-view.component';
import { LoginComponent } from './login/login.component';
import { NewsListComponent } from './news-list/news-list.component';
import { VerifiedListComponent } from './verified-list/verified-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'editor' , component: EditorViewComponent },
  { path: 'agent', component: AgentViewComponent  },
  { path: 'login', component: LoginComponent},
  { path: 'editor/newsList', component: NewsListComponent},
  { path: 'editor/verifiedList', component: VerifiedListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EditorViewComponent,
    AgentViewComponent,
    LoginComponent,
    NewsListComponent,
    VerifiedListComponent
  ],
  imports: [
    RouterModule.forRoot(
     appRoutes
   ),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [NewsStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
