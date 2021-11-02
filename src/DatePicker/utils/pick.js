const pick = (obj, ...props) =>
    props.reduce((result, prop) => {
        result[prop] = obj[prop];
        return result;
    }, {});

export default pick;
