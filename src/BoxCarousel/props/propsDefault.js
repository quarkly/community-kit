import { navigationType } from '../components/navigation/constants';
import { paginationType } from '../components/pagination/constants';

export default {
    slidesCount: '3',
    slidesAs: 'box',

    showArrows: navigationType.arrowsin,
    showPagination: paginationType.labelsin,
    draggable: true,
    infinityMode: true,
    keyboardControl: true,

    autoPlay: false,
    autoPlaySpeed: '1500ms',
    autoPlayHoverPause: true,
    showAutoPlayButton: false,

    effect: 'slide',
    animDuration: '300ms',
    animFunction: 'ease',
};
