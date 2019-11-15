import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Layouts
import { MainLayoutComponent } from '@app/shared/layouts/index';
import { AuthLayoutComponent } from '@app/shared/layouts/index';
// Components
import { LoginComponent } from '@app/components/login/login.component';
import { PasswordRecoveryComponent } from '@app/components/password-recovery/password-recovery.component';
import { RegistrationComponent } from '@app/components/registration/registration.component';
import { AuthGuardService as AuthGuard } from './core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'password-recovery',
                component: PasswordRecoveryComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            }
        ]
    },
    //
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {   
                path: 'data-tables',
                loadChildren: './components/data-tables/data-tables.module#DataTablesModule',
                canActivate: [AuthGuard]
            },
            {   
                path: 'forms',
                loadChildren: './components/forms/forms.module#FormsModule',
                canActivate: [AuthGuard]
            },
            {  
                path: 'tabs',
                loadChildren: './components/tabs/tabs.module#TabsModule',
                canActivate: [AuthGuard]
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),HttpClientModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
