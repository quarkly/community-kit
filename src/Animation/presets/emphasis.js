import { keyframes } from 'styled-components';

export default {
    Pop: {
        timingFunction: 'ease-in-out',
        keyframes: keyframes`
      0% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }
      14% {
        transform: scale3d(1.3, 1.3, 1);
        will-change: transform;
      }
      28% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }

      42% {
        transform: scale3d(1.3, 1.3, 1);
        will-change: transform;
      }

      70% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }
      80% {
        transform: scale3d(1, 1, 1);
        will-change: transform;
      }
    `,
    },
    Juggle: {
        timingFunction: 'cubic-bezier(0.455, 0.030, 0.515, 0.955)',
        keyframes: keyframes`
      0%,
      100% {
        transform: rotate(0deg);
        transform-origin: 50% 50%;
      }
      10% {
        transform: rotate(2deg);
      }
      20%,
      40%,
      60% {
        transform: rotate(-4deg);
      }
      30%,
      50%,
      70% {
        transform: rotate(4deg);
      }
      80% {
        transform: rotate(-2deg);
      }
      90% {
        transform: rotate(2deg);
      }
    `,
    },
    Blink: {
        timingFunction: 'ease-in-out',
        keyframes: keyframes`
      0%,
      50%,
      100% {
        opacity: 1;
      }
      25%,
      75% {
        opacity: 0;
      }
    `,
    },
    Bounce: {
        timingFunction: 'ease-in-out',
        keyframes: keyframes`
      0% {
        transform: translateY(-45px);
        animation-timing-function: ease-in;
        opacity: 1;
      }
      24% {
        opacity: 1;
      }
      40% {
        transform: translateY(-24px);
        animation-timing-function: ease-in;
      }
      65% {
        transform: translateY(-12px);
        animation-timing-function: ease-in;
      }
      82% {
        transform: translateY(-6px);
        animation-timing-function: ease-in;
      }
      93% {
        transform: translateY(-4px);
        animation-timing-function: ease-in;
      }
      25%,
      55%,
      75%,
      87% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
      }
      100% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
        opacity: 1;
      }
    `,
    },
    Jello: {
        timingFunction: 'ease-in-out',
        keyframes: keyframes`
      0% {
        transform: scale3d(1, 1, 1);
      }
      30% {
        transform: scale3d(1.25, 0.75, 1);
      }
      40% {
        transform: scale3d(0.75, 1.25, 1);
      }
      50% {
        transform: scale3d(1.15, 0.85, 1);
      }
      65% {
        transform: scale3d(0.95, 1.05, 1);
      }
      75% {
        transform: scale3d(1.05, 0.95, 1);
      }
      100% {
        transform: scale3d(1, 1, 1);
      }
    `,
    },
    Rubber: {
        timingFunction: 'ease-in-out',
        keyframes: keyframes`
      0% {
        transform: skew(0deg 0deg);
      }
      30% {
        transform: skew(25deg 25deg);
      }
      40% {
        transform: skew(-15deg, -15deg);
      }
      50% {
        transform: skew(15deg, 15deg);
      }
      65% {
        transform: skew(-5deg, -5deg);
      }
      75% {
        transform: skew(5deg, 5deg);
      }
      100% {
        transform: skew(0deg 0deg);
      }
    `,
    },
};
