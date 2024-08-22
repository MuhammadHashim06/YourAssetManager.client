import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleStyle]'
})
export class ToggleStyleDirective {
  private isToggled: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Apply the initial style
    this.setStyle('unselected');
  }

  // HostListener listens to click events on the host element
  @HostListener('click') onClick() {
    this.isToggled = !this.isToggled;
    this.setStyle(this.isToggled ? 'selected' : 'unselected');
  }

  // Helper method to set styles based on the state
  private setStyle(state: 'unselected' | 'selected') {
    if (state === 'unselected') {
      this.renderer.removeClass(this.el.nativeElement, 'selected');
      this.renderer.addClass(this.el.nativeElement, 'unselected');
      // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'lightblue');
      // this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'unselected');
      this.renderer.addClass(this.el.nativeElement, 'selected');
      // this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'darkblue');
      // this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
    }
  }
}
