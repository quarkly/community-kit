import getAPI from './getAPI';

const demoObject = {
    index: {
        id: 'index',
        name: 'index',
        pageUrl: 'index',
    },
};

const pagesNames = Object.values(getAPI().pages || demoObject).reduce(
    (prev, curr) => ({
        ...prev,
        [curr.pageUrl]: curr,
    }),
    {}
);

const getPropsUrlPages = () =>
    (window?.location.hash?.slice(2).split('/') || ['index']).map(
        (name, i) => ({
            title: i === 0 ? pagesNames.index.name : pagesNames[name].name,
            value: i === 0 ? pagesNames.index.id : pagesNames[name].id,
        })
    );

export default getPropsUrlPages;
