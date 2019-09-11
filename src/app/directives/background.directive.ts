import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appBackground]'
    // Подсказывает фреймверку что дерективу нужно будет искать по атрибуту в HTML
    // По названию. Важно писать сначало префикс приложения, далее название дерективы

})
export class BackgroundDirective implements OnInit {
    constructor(private element: ElementRef,private renderer: Renderer2) {}
    ngOnInit() {
        // тут можно уже работать с элементом
        // this.renderer.addClass(this.element.nativeElement,'white-text');
        // this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    }
    @HostBinding('style.backgroundColor') background: string;

    @HostListener('mouseenter') mouseEnter() {
        this.background = 'red';
    }

    @HostListener('mouseleave') mouseLeave() {
        this.background = 'transparent';
    }
}