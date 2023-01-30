import React, { useMemo } from 'react';
import Pagination from '../components/pagination/Pagination';

const usePaginationModule = (showPagination) => {
    const PaginationComponent = useMemo(() => {
        const PaginationWrapper = (props) => (
            <Pagination showPagination={showPagination} {...props} />
        );

        return PaginationWrapper;
    }, [showPagination]);

    return [PaginationComponent];
};

export default usePaginationModule;
