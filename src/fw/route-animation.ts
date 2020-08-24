import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';

// Add to app.component.html
// <div [@routeAnimations]="o && o.activatedRouteData && o.activatedRouteData['animation']">
// <router-outlet #o="outlet"></router-outlet>
// </div>
//
// Add to app.component.ts
// import { slideInAnimation } from '../fw/route-animation';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
//   animations: [ slideInAnimation ]
// })

// Add to app.routing.module.ts
//
//
// { path: 'dashboard', component: DashboardComponent ,data: {animation: 'left'}},
// { path: 'aanbod', component: AanbodComponent ,data: {animation: 'left'}},
// { path: 'projecten', component: ProjectenComponent ,data: {animation: 'left'}},
// { path: 'opdrachtgevers', component: OpdrachtgeversComponent ,data: {animation: 'left'}},
// { path: 'profiel', component: ProfielComponent ,data: {animation: 'About'} },
// { path: 'contact', component: ContactComponent,data: {animation: 'contact'}  },


export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => Home', slideTo('left')),
        transition('* => Contact', slideTo('right')),
        transition('isRight => *', slideTo('left')),
        transition('* <=> *', slideTo('right')),
        transition('isLeft => *', slideTo('right'))
    ]);

function slideUp(){
    
}
//
// Slide Animations
//
function slideTo(direction) {
    const optional = { optional: true };
    return [
        query(':enter, :leave', [
            style({
                position: 'fixed',
                // top: 0,
                [direction]: 0,
                width: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ [direction]: '-100%' })
        ], { optional: true }),
        group([
            query(':leave', [
                animate('600ms ease', style({ [direction]: '100%' }))
            ], { optional: true }),
            query(':enter', [
                animate('600ms ease', style({ [direction]: '0%' }))
            ], { optional: true })
        ]),
        // Normalize the page style... Might not be necessary

        // Required only if you have child animations on the page
        // query(':leave', animateChild()),
        // query(':enter', animateChild()),
    ];
}

//
// Fader Animation
//
function fader() {
    return [
        query(':enter, :leave', [
            style({
              position: 'absolute',
              left: 0,
              width: '100%',
              opacity: 0,
              transform: 'scale(0) translateY(100%)'
            }),
          ],{ optional: true }),
          // Animate the new page in
          query(':enter', [
            animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
          ],{ optional: true })
    ];

}


//
// Transform Animation
//
// Exmaple : 

//  transition('* => isLeft', transformTo({ x: -100, y: -100, rotate: -720 }) ),
//  transition('* => isRight', transformTo({ x: 100, y: -100, rotate: 90 }) ),
//  transition('isRight => *', transformTo({ x: -100, y: -100, rotate: 360 }) ),
//  transition('isLeft => *', transformTo({ x: 100, y: -100, rotate: -360 }) )
function transformTo({x = 100, y = 0, rotate = 0}) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
      ],optional),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
        ], optional),
        query(':enter', [
          animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
        ],optional)
      ]),
    ];
  }

//
// First try => works also
//
export const slideInAnimation1 =
    trigger('routeAnimations', [
        transition('Contact => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('Home => *', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Contact', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(-100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('About => Home', [
            query(':enter, :leave',
                style({ position: 'fixed', width: '100%' }),
                { optional: true }),
            group([
                query(':enter', [
                    style({ transform: 'translateX(-100%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
                query(':leave', [
                    style({ transform: 'translateX(0%)' }),
                    animate('0.5s ease-in-out',
                        style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            ])
        ]),
        transition('* <=> *', [
            // Set a default  style for enter and leave
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    opacity: 0,
                    transform: 'scale(0) translateY(100%)'
                }),
            ], { optional: true }),
            // Animate the new page in
            query(':enter', [
                animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
            ], { optional: true })
        ]),
    ]);


