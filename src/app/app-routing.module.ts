import {
    NgModule
} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';
const routes: Routes = [{
        path: '',
        redirectTo: 'main_login',
        pathMatch: 'full'
    },
    {
        path: 'main_login',
        loadChildren: './Main_Login/Main_Login.module#Main_LoginPageModule',
    },
    {
        path: 'register_normal',
        loadChildren: './Register_Normal/Register_Normal.module#Register_NormalPageModule',
    },
    {
        path: 'register_services',
        loadChildren: './Register_Services/Register_Services.module#Register_ServicesPageModule',
    },
    {
        path: 'register_services_2',
        loadChildren: './Register_Services_2/Register_Services_2.module#Register_Services_2PageModule',
    },
    {
        path: 'register_select',
        loadChildren: './Register_Select/Register_Select.module#Register_SelectPageModule',
    },
    {
        path: 'login',
        loadChildren: './Login/Login.module#LoginPageModule',
    },
];
@NgModule({
    imports: [RouterModule.forRoot(
        routes, {
            enableTracing: false,
            useHash: true
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule {}