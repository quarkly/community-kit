import { keyframes } from 'styled-components';

export default {
    '→ Slide In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(-30px, 0px, 0px);
        filter: blur(5px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       filter: blur(0px);
       transform-style: preserve-3d;
      }
    `,
    },
    '↓ Slide In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(0px, -30px, 0px);
        filter: blur(5px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       filter: blur(0px);
       transform-style: preserve-3d;
      }
    `,
    },
    '← Slide In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(30px, 0px, 0px);
        filter: blur(5px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       filter: blur(0px);
       transform-style: preserve-3d;
      }
    `,
    },
    '↑ Slide In': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 0;
        will-change: transform, opacity, filter;
        transform: translate3d(0px, 30px, 0px);
        filter: blur(5px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 1;
       will-change: transform, opacity, filter;
       transform: translate3d(0px, 0px, 0px);
       filter: blur(0px);
       transform-style: preserve-3d;
      }
    `,
    },
    '→ Slide Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(100px, 0px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `,
    },
    '↓ Slide Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(0px, 100px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `,
    },
    '← Slide Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(-100px, 0px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `,
    },
    '↑ Slide Out': {
        timingFunction: 'ease-in',
        keyframes: keyframes`
      0% {
        opacity: 1;
        will-change: transform, opacity;
        transform: translate3d(0px, 0px, 0px); 
        filter: blur(0px);
        transform-style: preserve-3d;
      }
      100% {
       opacity: 0;
       will-change: transform, opacity;
       transform: translate3d(0px, -100px, 0px);
       filter: blur(5px);
       transform-style: preserve-3d;
      }
    `,
    },
};
