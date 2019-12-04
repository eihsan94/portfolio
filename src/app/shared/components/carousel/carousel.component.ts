// tslint:disable: directive-selector
// tslint:disable: directive-class-suffix
import { Component, AfterViewInit, ContentChildren, QueryList, Directive, ViewChildren, ElementRef, ViewChild, Input } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import { AnimationPlayer, AnimationFactory, animate, style, AnimationBuilder } from '@angular/animations';
import { ButtonMetaData } from '../buttons/model/button';
@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel', {static: false}) private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player: AnimationPlayer;
  private itemWidth: number;
  private currentSlide = 0;
  carouselWrapperStyle = {};
  nextButton: ButtonMetaData = {
    type: 'fab',
      icon: 'chevron_right',
      color: 'basic',
      tooltip: 'next',
      disabled: false,
      matTooltipDisabled: false,
      clickEvent: () => this.next(),
  };
  previousButton: ButtonMetaData = {
    type: 'fab',
    icon: 'chevron_left',
    color: 'basic',
    tooltip: 'previous',
    disabled: true,
    matTooltipDisabled: false,
    clickEvent: () => this.prev(),
  };

  next() {
    if ( this.currentSlide + 1 === this.items.length ) { return; }
    this.currentSlide = (this.currentSlide + 1) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.setButtonClickStatus();
  }

  private buildAnimation( offset ) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  prev() {
    if ( this.currentSlide === 0 ) { return this.previousButton.disabled = true; }
    this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
    this.setButtonClickStatus();
  }

  constructor( private builder: AnimationBuilder ) {
  }

  ngAfterViewInit() {
    // For some reason only here I need to add setTimeout, in my local env it's working without this.
    setTimeout(() => {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = {
        width: `${this.itemWidth}px`
      };
    });
  }
  setButtonClickStatus(): void {
    this.previousButton.disabled = this.currentSlide === 0;
    this.nextButton.disabled = this.currentSlide + 1 === this.items.length;
  }
}
