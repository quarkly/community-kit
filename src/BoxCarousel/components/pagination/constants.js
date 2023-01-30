export const paginationType = Object.freeze({
    none: 'none',
    labelsin: 'labelsin',
    labelsout: 'labelsout',
    thumbnailsin: 'thumbnailsin',
    thumbnailsout: 'thumbnailsout',
    dotsin: 'dotsin',
    dotsout: 'dotsout',
    dynamicdotsin: 'dynamicdotsin',
    dynamicdotsout: 'dynamicdotsout',
    fractionin: 'fractionin',
    fractionout: 'fractionout',
    progress: 'progress',
});

const inTypes = [
    paginationType.labelsin,
    paginationType.thumbnailsin,
    paginationType.dotsin,
    paginationType.dynamicdotsin,
    paginationType.fractionin,
    paginationType.progress,
];

export const isPaginationIn = (type) => {
    if (inTypes.includes(type)) {
        return true;
    }
};

export const isProgress = (type) => {
    return type === paginationType.progress;
};
