import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CommonModule} from '@angular/common';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'post/:id/:slug', loadChildren: () => import('./post/post.module').then(m => m.PostModule)},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    QuicklinkModule,
    RouterModule.forRoot(routes, {preloadingStrategy: QuicklinkStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
