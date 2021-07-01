import getAPI from './getAPI';

const getPagesProps = () =>
    Object.values(getAPI().pages || {})
        .filter((x) => x.id !== 'root')
        .map(({ name, id }) => ({ title: name, value: id }));

export default getPagesProps;
