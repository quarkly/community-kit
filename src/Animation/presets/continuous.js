import { keyframes } from 'styled-components';

export default {
    Rotate: {
        timingFunction: 'linear',
        keyframes: keyframes`
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(180deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `,
    },
    'Vibrate 1': {
        timingFunction: 'linear',
        keyframes: keyframes`
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      100% {
        transform: translate(0);
      }
    `,
    },
    'Vibrate 2': {
        timingFunction: 'linear',
        keyframes: keyframes`
      0% {
        transform: scale(1.03);
      }
      2% {
        transform: scale(1);
      }
      4% {
        transform: scale(1.03);
      }
      8% {
        transform: scale(1);
      }
      12% {
        transform: scale(1.03);
      }
      14% {
        transform: scale(1);
      }
      16% {
        transform: scale(1.03);
      }
      18% {
        transform: scale(1);
      }
      20% {
        transform: scale(1.03);
      }
      22% {
        transform: scale(1);
      }
      24% {
        transform: scale(1.03);
      }
      26% {
        transform: scale(1);
      }
      28% {
        transform: scale(1.03);
      }
      30% {
        transform: scale(1);
      }
      32% {
        transform: scale(1.03);
      }
      34% {
        transform: scale(1);
      }
      36% {
        transform: scale(1.03);
      }
      38% {
        transform: scale(1);
      }
      40% {
        transform: scale(1.03);
      }
      42% {
        transform: scale(1);
      }
      44% {
        transform: scale(1.03);
      }
      46% {
        transform: scale(1);
      }
      48% {
        transform: scale(1.03);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(1);
      }
    `,
    },
    Flicker: {
        timingFunction: 'linear',
        keyframes: keyframes`
      0%,
      100% {
        opacity: 1;
      }
      41.99% {
        opacity: 1;
      }
      42% {
        opacity: 0;
      }
      43% {
        opacity: 0;
      }
      43.01% {
        opacity: 1;
      }
      47.99% {
        opacity: 1;
      }
      48% {
        opacity: 0;
      }
      49% {
        opacity: 0;
      }
      49.01% {
        opacity: 1;
      }
    `,
    },
    Shake: {
        timingFunction: 'linear',
        keyframes: keyframes`
      0%,
      100% {
        transform: rotate(0deg);
        transform-origin: 50% 50%;
      }
      5% {
        transform: rotate(8deg);
      }
      10%,
      20% {
        transform: rotate(-10deg);
      }
      15%,
      25%{
        transform: rotate(10deg);
      }
      30% {
        transform: rotate(0deg);
      }
    `,
    },
    Ping: {
        timingFunction: 'linear',
        keyframes: keyframes`
      0% {
        transform: scale(0.2);
        opacity: 0.8;
      }
      80% {
        transform: scale(1.2);
        opacity: 0;
      }
      100% {
        transform: scale(2.2);
        opacity: 0;
      }
    `,
    },
    Beat: {
        timingFunction: 'linear',
        keyframes: keyframes`
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.6);
      }
    `,
    },
};
