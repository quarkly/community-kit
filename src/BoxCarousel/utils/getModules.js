import { Navigation, Pagination, Keyboard, EffectFade, Autoplay } from 'swiper';

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

    if (showPagination) {
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
