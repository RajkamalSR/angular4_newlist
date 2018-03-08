import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/shared/header/header.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: NewslistComponent },
  { path: 'newslist', component: NewslistComponent },
  { path: 'detailpage/:id', component: DetailpageComponent },
   { path: '**', redirectTo: '', pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);