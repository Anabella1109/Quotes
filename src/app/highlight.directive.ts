import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {}
   @HostListener('mouseenter') onmouseenter() {
    this.highlight(' rgb(226, 207, 245)');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
