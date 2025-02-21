import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImgStyle]'
})
export class ImgStyleDirective {
 //document.getElement
  //property decorator
  @Input() color1:string='gray'
  constructor(public elementRef: ElementRef) {
    //1 
    //document.getElement
    // this.elementRef.nativeElement.style.border = `5px solid ${this.color1}`;
    // console.log("constructor");
    
  }
//component interaction
//nested
//services
  ngOnInit(): void {
    //3
    // console.log("onInit");
    // this.elementRef.nativeElement.style.border = `5px solid ${this.color1}`;

  }
  ngOnChanges(): void {
    //2
    // console.log("ngOnChanges");
    this.elementRef.nativeElement.style.border = `1px solid ${this.color1}`;
    this.elementRef.nativeElement.style.borderRadius = "25px";


  }
  //method decorator
  @HostListener('mouseover') mouseOver() {
    this.elementRef.nativeElement.style.border = `2px solid black`;
    this.elementRef.nativeElement.style.borderRadius = "60px";

  }
  @HostListener('mouseout') mouseout() {
    this.elementRef.nativeElement.style.border = `1px solid ${this.color1}`;
    this.elementRef.nativeElement.style.borderRadius = "25px"

  }
}
