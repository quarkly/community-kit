import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import Bullets from './Bullets';
import LabelsAndThumbnails from './LabelsAndThumbnails';
import Fraction from './Fraction';
import { isPaginationIn, paginationType } from './constants';
import Progress from './Progress';
import { useDebouncedCallback } from '../../../utils';

const createBreakpointRule = (point) =>
    point
        .map(({ type, value }) =>
            value === true ? `(${type})` : `(${type}: ${value}px)`
        )
        .join(' and ');

const Pagination = ({ showPagination }) => {
    const theme = useTheme();
    const [pagination, setPagination] = useState(showPagination);

    const handleResize = useDebouncedCallback(() => {
        const rule = createBreakpointRule(theme.breakpoints.sm);
        const matched = window.matchMedia(rule).matches;
        if (matched) {
            if (isPaginationIn(showPagination)) {
                setPagination(paginationType.dotsin);
            } else {
                setPagination(paginationType.dotsout);
            }
        } else {
            setPagination(showPagination);
        }
    }, 50);

    useEffect(() => {
        if (
            showPagination === paginationType.none ||
            showPagination === paginationType.dotsin ||
            showPagination === pagination.dotsout
        ) {
            return;
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme.breakpoints.sm, showPagination]);

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
