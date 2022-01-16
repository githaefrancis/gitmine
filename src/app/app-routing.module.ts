import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SingleUserComponent } from './single-user/single-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search',component:SearchPageComponent},
  {path:'search/:query',component:SearchPageComponent},
  {path:'user/:login/:item',component:SingleUserComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
