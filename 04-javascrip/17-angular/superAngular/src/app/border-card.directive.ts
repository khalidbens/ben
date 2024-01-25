import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]',
  standalone: true
})
export class BorderCardDirective {

  // @Input() appBorderCard: string|undefined;
  @Input("appBorderCard") borderColor: string|undefined;
  constructor(private el: ElementRef)
  {
    this.setShadow(5,5,10,2, 'black');
    this.setBorder(2, 'red');
  }

  private setShadow(x: number, y: number, blur: number, radius: number, color: string) 
  {
    // elementRef permet de recuperer l'element html sur lequel est deposé lattribut
    // on passera par sa propriété nativeElement
    this.el.nativeElement.style.boxShadow = `${x}px ${y}px ${blur}px ${radius}px ${color}`;
   }
   private setBorder(size: number, color: string)
   {
    this.el.nativeElement.style.border = `${size}px solid ${color}`
   }
   @HostListener('mouseenter') onMouseEnter()
   {
     this.setBorder(2, this.borderColor || 'blue');
     this.setShadow(5,5,20,2, 'pink');
   }

   @HostListener('mouseleave') onMouseLeave()
   {
      this.setShadow(5,5,10,2, 'black');
      this.setBorder(2, 'red');
   }
  }


