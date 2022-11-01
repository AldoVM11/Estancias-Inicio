import {
    Directive,
    ElementRef
} from '@angular/core';

/**
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[ShowSignupPassword]' // Attribute selector
})

export default class ShowSignupPasswordDirective {
    private eyeIcon;
    private passwordInput;
    constructor(private el: ElementRef) {

    }

    ngOnInit() {
        if (this.el && this.el.nativeElement && this.el.nativeElement.parentElement) {
            this.passwordInput = this.el.nativeElement;
            this.eyeIcon = this.passwordInput.parentElement.querySelector("ion-icon");
            if (this.eyeIcon) {
                this.eyeIcon.style = 'cursor: pointer';
                this.eyeIcon.addEventListener('click', (event) => {

                    if (this.passwordInput.type === 'password') {
                        this.passwordInput.type = 'text';
                        this.eyeIcon.name = 'eye-off';
                    } else {
                        this.passwordInput.type = 'password';
                        this.eyeIcon.name = 'eye';
                    }
                });
            }
        }
    }
}

/*
    Directive class should be exported as ExportedClass
*/
export {
    ShowSignupPasswordDirective as ExportedClass
};