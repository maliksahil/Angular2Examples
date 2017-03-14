import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

class ObservableNumbersWithSubject {
    private _numbers: Subject<number> = new Subject<number>();
    public numbers: Observable<number> = this._numbers.asObservable();

    constructor() {
        let numberGenerator = Observable.interval(500).take(5);
        numberGenerator.subscribe(newNumber => this._numbers.next(newNumber));        
    }
}

class ObservableNumbersWithBehaviorSubject {
    private _numbers: BehaviorSubject<number> = new BehaviorSubject<number>(10);
    public numbers: Observable<number> = this._numbers.asObservable();

    constructor() {
        let numberGenerator = Observable.interval(500).take(5);
        numberGenerator.subscribe(newNumber => this._numbers.next(newNumber));
    }
}

let obsNumbersSubject: ObservableNumbersWithSubject = new ObservableNumbersWithSubject();
obsNumbersSubject.numbers.subscribe(nextNumber => { console.log("Subject:" + nextNumber); });

let obsNumbersBehaviorSubject: ObservableNumbersWithBehaviorSubject = new ObservableNumbersWithBehaviorSubject();
obsNumbersBehaviorSubject.numbers.subscribe(nextNumber => { console.log("BehaviorSubject:" + nextNumber); });