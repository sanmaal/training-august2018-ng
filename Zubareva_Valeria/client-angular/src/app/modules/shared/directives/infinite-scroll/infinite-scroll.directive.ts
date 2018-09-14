import {Directive, EventEmitter, HostListener, Output} from '@angular/core';


@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {
  @Output()
  scrollBottom = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.scrollBottom.emit();
    }
  }
}
