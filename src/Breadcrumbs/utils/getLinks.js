import { getAPI, getPagesIdsByPath } from '../../utils';

const isBrowser = typeof window !== 'undefined';

const getLinks = (path) => {
    const { pages, mode } = getAPI();

    if (!isBrowser || !pages)
        return {
            links: [],
            url: [],
        };

    const ids = getPagesIdsByPath(path);
    const lastId = ids.pop();

    if (!lastId) return { links: [], url: [] };

    const rootPage = pages[lastId];

    const names = Object.values(pages).reduce(
        (prev, curr) => ({
            ...prev,
            [curr.pageUrl]: curr,
        }),
        {}
    );

    let url =
        mode === 'production'
            ? window.location?.pathname.slice(1)
            : window.location?.hash.slice(2);

    if (['/', '/index'].includes(url)) {
        url = '';
    }

    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }

    url = url
        .split('/')
        .map((name, i) => (i === 0 ? names.index : names[name]));

    const rootIndex = url.findIndex((x) => x.id === rootPage?.id);
    const links = rootIndex !== -1 ? url.slice(rootIndex) : url;

    return {
        links,
        url,
    };
};

export default getLinks;
