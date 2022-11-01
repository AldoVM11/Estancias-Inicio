import {
    NgModule
} from '@angular/core';
import {
    IonicModule
} from '@ionic/angular';
import {
    ExportedClass as ShowLoginPassword_Login_3
} from './custom/ShowLoginPassword_Login_3';
import {
    ExportedClass as ShowLoginPassword_Login_2
} from './custom/ShowLoginPassword_Login_2';
import {
    ExportedClass as ShowLoginPassword_Login
} from './custom/ShowLoginPassword_Login';
import {
    ExportedClass as ShowSignupPassword
} from './custom/ShowSignupPassword';
import {
    ExportedClass as ShowLoginPassword
} from './custom/ShowLoginPassword';
@NgModule({
    declarations: [
        ShowLoginPassword_Login_3,
        ShowLoginPassword_Login_2,
        ShowLoginPassword_Login,
        ShowSignupPassword,
        ShowLoginPassword,
    ],
    imports: [IonicModule],
    exports: [
        ShowLoginPassword_Login_3,
        ShowLoginPassword_Login_2,
        ShowLoginPassword_Login,
        ShowSignupPassword,
        ShowLoginPassword,
    ]
})
export class DirectivesModule {}