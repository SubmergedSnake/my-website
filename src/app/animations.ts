import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
      }),
      animate('0.8s ease-in')
    ]),
    transition(':leave', [
      animate('0s ease-out', style({
        opacity: 0
      }))
    ])
  ]);
