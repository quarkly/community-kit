import React, { useEffect, useState } from 'react';
import Bullets from './Bullets';
import LabelsAndThumbnails from './LabelsAndThumbnails';
import Fraction from './Fraction';
import { isPaginationIn, paginationType } from './constants';
import Progress from './Progress';
import useBreakpoint from '../../../utils/useBreakpoint';

const breakpoints = ['sm'];

const Pagination = ({ showPagination }) => {
    const [pagination, setPagination] = useState(showPagination);
    const breakpoint = useBreakpoint(breakpoints);

    useEffect(() => {
        if (breakpoint === 'sm') {
            if (isPaginationIn(showPagination)) {
                setPagination(paginationType.dynamicdotsin);
            } else {
                setPagination(paginationType.dynamicdotsout);
            }
        } else {
            setPagination(showPagination);
        }
    }, [breakpoint, showPagination]);

    switch (pagination) {
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
