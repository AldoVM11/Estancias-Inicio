import {
    Component
} from '@angular/core';
import {
    ChangeDetectorRef
} from '@angular/core';
import {
    ApperyioHelperService
} from '../../scripts/apperyio/apperyio_helper';
import {
    ApperyioMappingHelperService
} from '../../scripts/apperyio/apperyio_mapping_helper';
import {
    $aio_empty_object
} from '../../scripts/interfaces';
import {
    Input
} from '@angular/core';
import {
    Output
} from '@angular/core';
import {
    EventEmitter
} from '@angular/core';
import {
    ControlValueAccessor
} from '@angular/forms';
import {
    NG_VALUE_ACCESSOR
} from '@angular/forms';
import {
    NG_VALIDATORS
} from '@angular/forms';
import {
    Validator
} from '@angular/forms';
import {
    AbstractControl
} from '@angular/forms';
import {
    ValidationErrors
} from '@angular/forms';
import {
    forwardRef
} from '@angular/core';
@Component({
    templateUrl: 'Rating.html',
    selector: 'component-rating',
    styleUrls: ['Rating.scss'],
    providers: [{
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => Rating),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => Rating),
            multi: true,
        },
    ]
})
export class Rating implements ControlValueAccessor, Validator {
    public model: any;
    public aioChangeDetector: ChangeDetectorRef;
    public currentItem: any = null;
    public mappingData: any = {};
    public __getMapping(_currentItem, property, defaultValue, isVariable ? , isSelected ? ) {
        return this.$aio_mappingHelper.getMapping(this.mappingData, _currentItem, property, defaultValue, isVariable, isSelected);
    }
    public __isPropertyInMapping(_currentItem, property) {
        return this.$aio_mappingHelper.isPropertyInMapping(this.mappingData, _currentItem, property);
    }
    public __setMapping(data: any = {}, keyName: string, propName ? : string): void {
        const changes = data.detail || {};
        if (propName) {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes[propName]);
        } else {
            this.mappingData = this.$aio_mappingHelper.updateData(this.mappingData, [keyName], changes.value);
        }
        this.$aio_changeDetector.detectChanges();
    }
    @Input() public rating: any;
    @Input() public starsSize: any;
    @Input() public ratingCount: any;
    @Input() public disabled: any;
    /**
     * A callback executed when the content of the editor changes. Part of the
     * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
     *
     * Note: Unset unless the component uses the `ngModel`.
     */
    public ngModelOnChange ? : (data: any) => void;
    /**
     * A callback executed when the editor has been blurred. Part of the
     * `ControlValueAccessor` (https://angular.io/api/forms/ControlValueAccessor) interface.
     *
     * Note: Unset unless the component uses the `ngModel`.
     */
    public ccOnTouched ? : () => void;
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public writeValue(value: any | null): void {
        this.model = value;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public registerOnChange(callback: (data: any) => void): void {
        this.ngModelOnChange = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public registerOnTouched(callback: () => void): void {
        this.ccOnTouched = callback;
    }
    // Implementing the ControlValueAccessor interface (only when binding to ngModel).
    public setDisabledState(isDisabled: boolean): void {}
    validate(control: AbstractControl): ValidationErrors | null {
        return null;
    }
    setValue($event): any {
        this.ngModelOnChange($event);
    }
    constructor(public Apperyio: ApperyioHelperService, private $aio_mappingHelper: ApperyioMappingHelperService, private $aio_changeDetector: ChangeDetectorRef) {
        this.aioChangeDetector = this.$aio_changeDetector;
    }
}