import {
  animate,
  style,
  group,
  transition,
  trigger,
  keyframes
} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // 'void => *'
  transition(':enter', [
    style({
      width:'*',
      height:'*'
    }),
    group([
      // собирает в группу несколько анимаций
      animate(3000, style({
        width:'200px',
        height:'200px',
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'pink'}),
        style({backgroundColor: 'green'}),
        style({backgroundColor: 'red'})
      ]))
    ]),
    
    animate(1000)
  ]),
  // * => void
  transition(':leave', animate(500, style({
    opacity: 0
  })))
]);

export const changeWidthTrigger = trigger('changeWidth', [
  transition('* => *',[
    animate(1000, style({
      width:'10px'
    })),
    animate(1000, style({
      width:'*'
    }))
  ])
]);