import { trigger, state, style, transition, animate } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('.5s ease-in-out', style({ opacity: 1 }))
    ])
]);


export const slideInLeft = trigger('slideInLeft', [
    transition('void <=> *', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('.5s ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);

export const slideInRight = trigger('slideInRight', [
    transition('void <=> *', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('.5s ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
    ])
]);

export const scaleInAnimation = trigger('scaleInAnimation', [
    transition('void <=> *', [
        style({ transform: 'scale(0)', opacity: 0 }),
        animate('.5s ease-in-out', style({ transform: 'scale(1)', opacity: 1 }))
    ])
]);