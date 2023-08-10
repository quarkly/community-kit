import AutoPlayButton from '../components/autoplay/AutoPlayButton';
import useAutoPlay from '../components/autoplay/useAutoPlay';

const useAutoPlayModule = () => {
    return [useAutoPlay, AutoPlayButton];
};

export default useAutoPlayModule;
