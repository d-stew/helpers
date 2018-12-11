import { keyframes } from 'styled-components'

export const golden = 1.61803398875
export const easeInQuad = 'cubic-bezier(0.550, 0.085, 0.680, 0.530)'
export const easeInQuart = 'cubic-bezier(0.895, 0.030, 0.685, 0.220)'
export const easeOutQuad = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)'
export const easeOutQuint = 'cubic-bezier(0.230, 1.000, 0.320, 1.000)'
export const easeInOutQuad = 'cubic-bezier(0.455, 0.030, 0.515, 0.955)'
export const easeInOutSine = 'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
export const easeInOutBack = 'cubic-bezier(0.680, 0, 0.265, 1)'

export const checkmarkCircleGrow = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`

export const pop = keyframes`
  0% {
    transform: scale(1,1);
  }
  50% {
    transform: scale(2,2);
  }
  100% {
    transform: scale(1,1);
  }
`

export const checkmarkCheckGrow = keyframes`
  from {
    stroke-dashoffset: 20;
  }
  to {
    stroke-dashoffset: 40;
  }
`

export const fadeUp = keyframes`
  0% { opacity: 0; transform: translate(0, 30%) }
  100% { opacity: 1; transform: translate(0, 0) }
`

export const fadeZIn = keyframes`
  0% {
    transform: perspective(500px) translateZ(-100px);
    opacity: 0;
  }
  50% {
    transform: perspective(500px) translateZ(30px);
    opacity: 1;
  }
  100% {
    transform: perspective(500px) translateZ(0);
    opacity: 1;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const fadeInOut = keyframes`
  0% {
    opacity: .8;
  }
  50% {
    opacity: .2;
  }
  100% {
    opacity: .8;
  }
`

export const particlesEnter = keyframes`
  from {transform: translateY(-100%)}
  to {transform: translateY(0)}
`

export const slideInLeft = keyframes`
  0% { opacity: 0; transform: translate(10%, 0); }
  100% { opacity: 1; transform: translate(0, 0); }
`

export const slideOutRight = keyframes`
  0% { opacity: 1; transform: translate(0, 0); }
  100% { opacity: 0; transform: translate(10%, 0); }
`

export const slideFromRight = keyframes`
  from {
    transform: translate3D(120px,0,0);
    opacity: 0;
  }

  to {
    transform: translate3D(0,0,0);
    opacity: 1;
  }
`

export const slideFromLeft = keyframes`
  from {
    transform: translate3D(-120px,0,0);
    opacity: 0;
  }

  to {
    transform: translate3D(0,0,0);
    opacity: 1;
  }
`

export const popUp = keyframes`
  0% { opacity: 1; transform: translate(0, 0); }
  100% { opacity: 0; transform: translate(10px, -100px); }
`

export const popLeft = keyframes`
  0% { opacity: 1; transform: translate(0, 0); }
  100% { opacity: 0; transform: translate(-50px, -100px); }
`

export const popRight = keyframes`
  0% { opacity: 1; transform: translate(0, 0); }
  100% { opacity: 0; transform: translate(50px, -100px); }
`

export const scaleRight = keyframes`
  0% { transform: scale(0, 1); }
  50% { transform: scale(1, 1); }
  100% { transform: scale(1, 1); }
`

export const riseFall = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(0, 8%); }
  100% { transform: translate(0, 0); }
`

export const growShrink = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1.15, 1); }
  100% { transform: scale(1, 1); }
`

export const growShrinkX = keyframes`
  0% { transform: scale(1, 1); }
  50% { transform: scale(1.05, .97); }
  100% { transform: scale(1, 1); }
`

export const blink = keyframes`
  0% { transform: scale(1, 1); }
  2% { transform: scale(1.1, .1); }
  4% { transform: scale(1, 1); }
`

export const spin = keyframes`
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
`
