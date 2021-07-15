import getAPI from './getAPI';

const demoObject = {
    index: {
        id: 'index',
        name: 'index',
        pageUrl: 'index',
    },
};

const getPropsAllPages = () =>
    Object.values(getAPI().pages || demoObject)
        .filter((x) => x.id !== 'root')
        .map(({ name, id }) => ({ title: name, value: id }));

export default getPropsAllPages;
