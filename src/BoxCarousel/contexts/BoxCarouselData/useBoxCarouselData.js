import { useContext } from 'react';
import BoxCarouselDataContext from './BoxCarouselDataContextContext';

const useBoxCarouselData = () => useContext(BoxCarouselDataContext);

export default useBoxCarouselData;
