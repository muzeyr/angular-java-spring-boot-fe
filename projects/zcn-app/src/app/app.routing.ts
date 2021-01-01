import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
  
 import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { NoAuthGuard } from './core/guard/no-auth.guard';
import { DashboardComponent } from './modules/dashboard/pages/dashboard.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent 
  },
  { 
    path: '',
    component: AdminLayoutComponent,
    canActivate: [NoAuthGuard], 
    children: [
      {
        path: 'kategori',
        loadChildren: () =>
          import('./modules/kategori/kategori.module').then(m => m.KategoriModule)
      },
      {
        path: 'kullanici',
        loadChildren: () =>
          import('./modules/kullanici/kullanici.module').then(m => m.KullaniciModule)
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/auth/login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
