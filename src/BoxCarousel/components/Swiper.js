import { Swiper } from 'swiper/react';
import atomize from '@quarkly/atomize';

const AtomizedSwiper = atomize(Swiper)();

AtomizedSwiper.displayName = 'Swiper';

export default AtomizedSwiper;
