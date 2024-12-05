import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APIComponent } from './api/api.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgStyleComponent } from './ng-style/ng-style.component';

const routes: Routes = [
// {
//   path:'',
//   component:APIComponent,
//   pathMatch:'full'
// },
  {
  path:'api',
  component: APIComponent 
},
{path :'ngclass',
  component:NgClassComponent
},
{path :'ngstyle',
  component:NgStyleComponent
},
{path :'ngfor',
  component:NgforComponent
},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
