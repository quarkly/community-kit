import { Navigation, Pagination, Keyboard, EffectFade, Autoplay } from 'swiper';
import { paginationType } from '../components/pagination/constants';

const getModules = ({
    effect,
    showArrows,
    showPagination,
    keyboardControl,
}) => {
    const modules = [Autoplay];

    if (showArrows) {
        modules.push(Navigation);
    }

    if (showPagination && showPagination !== paginationType.none) {
        modules.push(Pagination);
    }

    if (keyboardControl) {
        modules.push(Keyboard);
    }

    const effectModule = {
        fade: EffectFade,
        slide: null,
    }[effect];

    if (effectModule) {
        modules.push(effectModule);
    }

    return modules;
};

export default getModules;
