import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouseEnter nastal');
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('mouseLeave nastal');
    this.highlight(null);
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('ELEMENTREF: ', elementRef)
    console.log('RENDERER: ', renderer)
   }

  private highlight(color: string | null) : void {
    const ref = this.elementRef.nativeElement;
    // ref.style.backgroundColor = "yellow";
    this.renderer.setStyle(ref, 'background-color', color)
  }

}
