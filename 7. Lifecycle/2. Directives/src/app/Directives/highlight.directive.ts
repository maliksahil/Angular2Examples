import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    constructor(private el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }

    ngOnChanges() {
        console.log("Directive: ngOnChanges");
    }
    ngOnInit() {
        console.log("Directive: ngOnInit");
    }
    ngDoCheck() {
        console.log("Directive: ngDoCheck");
    }
    ngAfterContentInit() {
        console.log("Directive: ngAfterContentInit");
    }
    ngAfterContentChecked() {
        console.log("Directive: ngAfterContentChecked");
    }
    ngAfterViewInit() {
        console.log("Directive: ngAfterViewInit");
    }
    ngAfterViewChecked() {
        console.log("Directive: ngAfterViewChecked");
    }
    ngOnDestroy() {
        console.log("Directive: ngOnDestroy");
    }
}