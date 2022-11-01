import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApperyioHelperService } from '../apperyio/apperyio_helper';
import * as CryptoJS from 'crypto-js';
/*
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
class FormUtils {
    private key;
    private cryptoJs = CryptoJS;
    
    constructor(private Apperyio: ApperyioHelperService) {
        this.key = this.Apperyio.config.get("SecuritySettings.database_id");
    }
    
    init(form) {
        if (form && localStorage['rememberMe']) {
            const encryptedCredentials = JSON.parse(localStorage['rememberMe']);
            const bytesUsername = this.cryptoJs.AES.decrypt(encryptedCredentials.username, this.key);
            const bytesPassword = this.cryptoJs.AES.decrypt(encryptedCredentials.password, this.key);
            form.controls.username.setValue(bytesUsername.toString(this.cryptoJs.enc.Utf8));
            form.controls.password.setValue(bytesPassword.toString(this.cryptoJs.enc.Utf8));
            form.controls.rememberme.setValue(true);
        } else if (form) {
            form.controls.username.setValue('');
            form.controls.password.setValue('');
            form.controls.rememberme.setValue(false);
        }
    }
    
    markFormControlsAsTouched(form, controlNames) {
        controlNames.forEach(controlName => {
           form.controls[controlName].markAsTouched(); 
        });
    }
    
    showPasswordOnClick(formName) {
        const eyeIcon = document.getElementsByTagName(formName)[0].getElementsByClassName('eye')[0];
        eyeIcon.addEventListener('click', (event) => {
            const passwordInput = < HTMLInputElement > document.getElementsByTagName(formName)[0].getElementsByClassName('password')[0];
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                eyeIcon['color'] = 'dark';
            } else {
                passwordInput.type = 'password';
                eyeIcon['color'] = 'light';
            }
        });
    }
    
    rememberMe(username, pwd) {
        const credentials = {
            username: this.cryptoJs.AES.encrypt(username, this.key).toString(),
            password: this.cryptoJs.AES.encrypt(pwd, this.key).toString()
        };
        localStorage['rememberMe'] = JSON.stringify(credentials);
    }
    
    forgotMe(event, form) {
        if (!event.detail.checked) {
            localStorage.removeItem('rememberMe');
            form.controls.username.setValue('');
            form.controls.password.setValue('');
        }
    }
    
}

/*
    Service class should be exported as ExportedClass
*/
export { FormUtils as ExportedClass };