import {animate, style, transition, trigger} from '@angular/animations';

const ANIMATION_TIME = '300ms';

export const errorAnimations = [
  trigger('messageAnimationTrigger', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(60px)',
      }),
      animate(`${ANIMATION_TIME} ease`, style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        transform: 'translateY(0)'
      }),
      animate(`${ANIMATION_TIME} ease`, style({
        opacity: 0,
        transform: 'translateY(60px)'
      })),
    ]),
  ]),
];
