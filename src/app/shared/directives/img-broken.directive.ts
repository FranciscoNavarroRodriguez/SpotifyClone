import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.host.nativeElement
    console.log(elNative)
    elNative.src = 'https://i0.wp.com/seox.es/wp-content/uploads/2019/04/solucionar-error-wordpress-jpg-1.jpg'
  }

  constructor(private host: ElementRef) { }

}
