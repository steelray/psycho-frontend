import { animate, group, query, stagger, state, style, transition, trigger } from '@angular/animations';

export const sizeInOut = trigger('sizeInOut', [
  state('in', style({ transform: 'translateY(0)', opacity: 1 })),
  transition('void => *', [style({ transform: 'translateY(-5%)', opacity: 0 }), animate('200ms 1ms ease-in')]),
  transition('* => void', [animate('200ms 0ms ease-out', style({ transform: 'translateY(5%)', opacity: 0 }))]),
]);
export const sizeIn = trigger('sizeIn', [
  state('in', style({ transform: 'translateY(0)', opacity: 1 })),
  transition('void => *', [style({ transform: 'translateY(-5%)', opacity: 0 }), animate('200ms 1ms ease-in')]),
  transition('* => void', [
    animate('0ms 0ms ease-out', style({ position: 'absolute', opacity: 0 })),
    animate('200ms 0ms ease-out', style({ transform: 'translateY(5%)', opacity: 0 })),
  ]),
]);

export const showInOut = trigger('showInOut', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [style({ opacity: 0 }), animate('300ms 1ms ease-in')]),
  transition('* => void', [animate('300ms 0ms ease-out', style({ opacity: 0 }))]),
]);
export const showIn = trigger('showIn', [
  state('in', style({ opacity: 1 })),
  transition('void => *', [style({ opacity: 0 }), animate('300ms 1ms ease-in')]),
]);
export const zoomInOut = trigger('zoomInOut', [
  state('in', style({ opacity: 1, transform: 'scale(1)' })),
  transition('void => *', [style({ opacity: 0, transform: 'scale(0.9)' }), animate('150ms 1ms ease-in')]),
  transition('* => void', [animate('150ms 0ms ease-out', style({ opacity: 0, transform: 'scale(0.9)' }))]),
]);

export const routerTransition = trigger('routerTransition', [
  transition('login <=> home', [
    query(':enter, :leave', style({ position: 'fixed', width: '100%', height: '100%' }), { optional: true }),
    group([
      query(
        ':enter',
        [style({ opacity: 0, transform: 'scale(0.8)' }), animate('0.3s ease-in-out', style({ opacity: 1, transform: 'scale(1)' }))],
        { optional: true }
      ),
      query(':leave', [animate('0.3s ease-in-out', style({ opacity: 0, transform: 'scale(0.8)' }))], { optional: true }),
    ]),
  ]),
]);

export const listAnimation = trigger('listAnimation', [
  transition('void => *', [
    query('.list-item', style({ opacity: 0, transform: 'translateX(-40px)' }), { optional: true }),

    query('.list-item', stagger('0.05s', [animate('0.3s 0.4s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))]), {
      optional: true,
    }),
  ]),
]);
