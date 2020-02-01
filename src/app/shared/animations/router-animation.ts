import {
    trigger,
    transition,
    style,
    query,
    animateChild,
    animate,
    stagger
} from '@angular/animations';

export const flyInOut =
    trigger('routeAnimations', [
        transition('* => *', [ // each time the binding value changes
            style({ transform: 'translateY(-10%)', opacity: 0 }),  // initial
            animate('700ms cubic-bezier(.8, -0.6, 0.2, 1.5)',
              style({ transform: 'translateY(0%)', opacity: 1 }))  // final
            ])
    ]);
