import React from 'react';
import Bullets from './Bullets';
import LabelsAndThumbnails from './LabelsAndThumbnails';
import Fraction from './Fraction';
import { paginationType } from './constants';
import Progress from './Progress';

const Pagination = ({ showPagination }) => {
    switch (showPagination) {
        case paginationType.labelsin:
        case paginationType.labelsout:
            return <LabelsAndThumbnails labels />;
        case paginationType.thumbnailsin:
        case paginationType.thumbnailsout:
            return <LabelsAndThumbnails thumbnails />;
        case paginationType.dotsin:
        case paginationType.dotsout:
            return <Bullets />;
        case paginationType.dynamicdotsin:
        case paginationType.dynamicdotsout:
            return <Bullets dynamic />;
        case paginationType.fractionin:
        case paginationType.fractionout:
            return <Fraction />;
        case paginationType.progress:
            return <Progress />;
        case paginationType.none:
        default:
            return null;
    }
};

export default Pagination;
