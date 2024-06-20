import { Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProvidersComponent } from './pages/providers/providers/providers.component';
import { NavComponent } from './pages/nav/nav.component';

export const routes: Routes = [
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'providers',
        component: ProvidersComponent
    }
];
