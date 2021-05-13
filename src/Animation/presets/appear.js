import { keyframes } from 'styled-components';

export default {
    'Fade In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: opacity;
      }
      100% {
       opacity: 1;
       will-change: opacity;
      }
    `,
    },
    'Fade Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: opacity;
      }
      100% {
       opacity: 0;
       will-change: opacity;
      }
    `,
    },
    'Flip In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity;
        transform: rotateY(-60deg); 
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: rotateY(0deg);
      }
    `,
    },
    'Flip Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: rotateY(0deg); 
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: rotateY(-90deg);
      }
    `,
    },
    'Grow In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity;
        transform: scale3d(0.9, 0.9, 1); 
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: scale3d(1, 1, 1);
      }
    `,
    },
    'Grow Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: scale3d(1, 1, 1); 
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: scale3d(1.25, 1.25, 1);
      }
    `,
    },
    'Shrink In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0.4;
        will-change: transform, opacity;
        transform: scale3d(1.3, 1.3, 1.3);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: scale3d(1, 1, 1);
       transform-style: preserve-3d;
      }
    `,
    },
    'Shrink Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: scale3d(1, 1, 1);
        transform-style: preserve-3d;
      }
      100% {
      opacity: 0;
       will-change: transform, opacity;
       transform: scale3d(0.75, 0.75, 1);
       transform-style: preserve-3d;
      }
    `,
    },
    'Spin In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity;
        transform: rotateZ(-180deg);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity;
       transform: rotateZ(0deg);
       transform-style: preserve-3d;
      }
    `,
    },
    'Spin Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: rotateZ(0deg);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: rotateZ(90deg);
       transform-style: preserve-3d;
      }
    `,
    },
    'Fly In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(-500px, 0px, 0px) scale3d(0, 0, 1);
        filter: blur(5px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
       filter: blur(0px);
       transform-style: preserve-3d;
      }
    `,
    },
    'Fly Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity, filter;
        transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1);
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity, filter;
       transform: translate3d(-500px, 0px, 0px) scale3d(0.25, 0.25, 1);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `,
    },
    'Drop In': {
        timingFunction: 'linear',
        keyframes: keyframes`
      0% {
        will-change: transform, opacity, filter;
        transform: translate3d(0px, -45px, 0px);
        animation-timing-function: ease-in;
        filter: blur(5px);
        opacity: 0;
      }
      24% {
        will-change: transform, opacity, filter;
        opacity: 1;
        filter: blur(0px);
      }
      40% {
        will-change: transform, opacity;
        transform: translate3d(0px, -24px, 0px);
        animation-timing-function: ease-in;

      }
      65% {
        will-change: transform, opacity;
        transform: translate3d(0px, -12px, 0px);
        animation-timing-function: ease-in;
      }
      82% {
        will-change: transform, opacity;
        transform: translate3d(0px, -6px, 0px);
        animation-timing-function: ease-in;
      }
      93% {
        will-change: transform, opacity;    
        transform: translate3d(0px, -4px, 0px);
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px);
        animation-timing-function: ease-out;
      }
      100% {
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px);
        animation-timing-function: ease-out;
        opacity: 1;
      }
    `,
    },
    'Drop Out': {
        timingFunction: 'cubic-bezier(0.755, 0.050, 0.855, 0.060)',
        keyframes: keyframes`
      0% {
        transform: translateY(0) scaleY(1) scaleX(1);
        transform-origin: 50% 50%;
        filter: blur(0);
        opacity: 1;
      }
      100% {
        transform: translateY(100px) scaleY(1) scaleX(0.2);
        transform-origin: 50% 100%;
        filter: blur(5px);
        opacity: 0;
      }
    `,
    },
};
