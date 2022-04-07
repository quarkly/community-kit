import getAPI from './getAPI';

const getPagesIdsByPath = (path) => {
    const { pages } = getAPI();

    if (!pages) return [undefined];

    const pathArray = path.split('/');

    const f = (page, i = 1) => {
        if (!page || i >= pathArray.length) return [];

        const nextId = page?.children?.find(
            (id) => pathArray[i] === pages[id]?.pageUrl
        );

        return [nextId, ...f(pages[nextId], i + 1)];
    };

    return f(pages.root);
};

export default getPagesIdsByPath;
