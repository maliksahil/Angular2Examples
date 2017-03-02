import {Observable} from 'rxjs/Rx';

basicObservable();
mapOperator();
mapAndFilter();
reduceOperator();
scanOperator();
shareOperator();

// cold observable, and is not shared by default - seperate processing chain for each observable.
function basicObservable() {
    let obs = Observable.interval(500).take(1)
        .do(i => console.log("value:" + i));

    obs.subscribe(value => console.log("observer 1 received:" + value));
    obs.subscribe(value => console.log("observer 2 received:" + value));
}

// map operator allows me to run a method on each value before sending it back.
function mapOperator() {
    let obs = Observable.interval(500).take(5)
        .do(i => console.log("value:" + i))
        .map(i => 2 * i);

    obs.subscribe(value => console.log("observer 1 received:" + value));
}

// This first filters evens, and then runs map.
function mapAndFilter() {
    let obs = Observable.interval(500).take(5)
        .do(i => console.log("value:" + i))
        .filter(value => {
            return value % 2 == 0;
        }).map(i => 2 * i);

    obs.subscribe(value => console.log("observer 1 received:" + value));
}

// reduce operator takes all inputs, runs the reducer function on them, and returns the accumulated (final) value
function reduceOperator() {
    let obs = Observable.interval(500).take(5)
        .do(i => console.log("value:" + i))
        .reduce((state, value) => state + value, 0);

    obs.subscribe(value => console.log("observer 1 received:" + value));
}

// scan operator is like reduce, but doesn't wait until end to return accumulated result. 
// Instead returns intermediate values as it goes.
function scanOperator() {
    let obs = Observable.interval(500).take(5)
        .do(i => console.log("value:" + i))
        .scan((state, value) => state + value, 0);

    obs.subscribe(value => console.log("observer 1 received:" + value));
}

// share operator prevents seperate processing chains for each subscriber
function shareOperator() {
    let obs = Observable.interval(500).take(5)
        .do(i => console.log("value:" + i))
        .share();

    obs.subscribe(value => console.log("observer 1 received:" + value));
    obs.subscribe(value => console.log("observer 2 received:" + value));
}
