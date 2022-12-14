import {
    NgModule
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    FormsModule
} from '@angular/forms';
import {
    HttpClientModule
} from '@angular/common/http';
import {
    IonicModule
} from '@ionic/angular';
import {
    IonicStorageModule
} from '@ionic/storage';
import {
    ApperyioModule
} from './scripts/apperyio/apperyio.module';
import {
    ApperyioDeclarablesModule
} from './scripts/apperyio/declarables/apperyio.declarables.module';
import {
    PipesModule
} from './scripts/pipes.module';
import {
    DirectivesModule
} from './scripts/directives.module';
import {
    ComponentsModule
} from './scripts/components.module';
import {
    CustomComponentsModule
} from './scripts/custom-components.module';
import {
    CustomModulesModule
} from './scripts/custom-modules.module';
import {
    Sanitizer
} from '@angular/core';
import {
    NgDompurifySanitizer
} from '@tinkoff/ng-dompurify';
import {
    createTranslateLoader
} from './scripts/apperyio/translate_module';
import {
    TranslateModule
} from '@ngx-translate/core';
import {
    TranslateLoader
} from '@ngx-translate/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    app
} from './app';
import {
    AppRoutingModule
} from './app-routing.module';
import {
    ExportedClass as FileReadService
} from './scripts/custom/FileReadService_Impl';
import {
    ExportedClass as GetCities
} from './scripts/custom/GetCities_Impl';
import {
    ExportedClass as SignupService
} from './scripts/services/SignupService';
import {
    ExportedClass as LogoutService
} from './scripts/services/LogoutService';
import {
    ExportedClass as LoginService
} from './scripts/services/LoginService';
import {
    ExportedClass as FormUtils
} from './scripts/custom/FormUtils';
import {
    File
} from '@ionic-native/file/ngx';
import {
    Globalization
} from '@ionic-native/globalization/ngx';
import {
    WebView
} from '@ionic-native/ionic-webview/ngx';
import {
    Device
} from '@ionic-native/device/ngx';
import {
    SplashScreen
} from '@ionic-native/splash-screen/ngx';
import {
    StatusBar
} from '@ionic-native/status-bar/ngx';
import {
    Keyboard
} from '@ionic-native/keyboard/ngx';
var getIonicModuleConfig, getIonicStorageModuleConfig;
@NgModule({
    declarations: [
        app
    ],
    imports: [
        BrowserModule,
        FormsModule,
        IonicModule.forRoot((typeof getIonicModuleConfig === "function") ? getIonicModuleConfig() : undefined),
        HttpClientModule,
        ApperyioModule,
        PipesModule,
        DirectivesModule,
        ComponentsModule,
        ApperyioDeclarablesModule,
        CustomComponentsModule,
        CustomModulesModule,
        IonicStorageModule.forRoot((typeof getIonicStorageModuleConfig === "function") ? getIonicStorageModuleConfig() : undefined),
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    bootstrap: [
        app
    ],
    entryComponents: [
        //app
    ],
    providers: [
        StatusBar,
        SplashScreen,
        WebView,
        Device,
        Keyboard,
        {
            provide: Sanitizer,
            useClass: NgDompurifySanitizer,
        },
        File,
        Globalization,
        FileReadService,
        GetCities,
        SignupService,
        LogoutService,
        LoginService,
        FormUtils,
    ]
})
export class AppModule {}