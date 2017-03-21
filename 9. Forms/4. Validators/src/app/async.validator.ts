import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

@Directive({
    selector: '[asyncValidator][formControlName], [asyncValidator][ngModel]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => AsyncValidator), multi: true
    }]
})
export class AsyncValidator implements Validator {
    validate(c: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
        return this.validateUniqueEmailPromise(c.value);
        // return this.validateUniqueEmailObservable(c.value).first();
    }
    validateUniqueEmailObservable(email: string) {
        return new Observable(observer => {
            if (email === 'sahilmalik@winsmarts.com') {
                observer.next({ asyncInvalid: true });
            } else {
                observer.next(null);
            }
        });
    }
    validateUniqueEmailPromise(email: string) {
        return new Promise(resolve => {
            setTimeout(() => {
                if (email === 'sahilmalik@winsmarts.com') {
                    resolve({ asyncInvalid: true })
                } else { resolve(null); }
            }, 1000);
        })
    }
}