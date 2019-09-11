import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appBackground]'
    // Подсказывает фреймверку что дерективу нужно будет искать по атрибуту в HTML
    // По названию. Важно писать сначало префикс приложения, далее название дерективы

})
export class BackgroundDirective implements OnInit {
    @Input() hoverColor: string = 'green';
    @Input() defaultColor: string = 'transparent';
    constructor(private element: ElementRef,private renderer: Renderer2) {}
    ngOnInit() {
        this.background = this.defaultColor;
    }
    
    @HostBinding('style.backgroundColor') background: string;

    
    @HostListener('mouseenter') mouseEnter() {
        this.background = this.hoverColor;
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = this.defaultColor;
    }
}