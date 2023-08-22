import React from 'react';
import getNumber from './getNumber';

const numberTransformer = (v, d) => getNumber(v, d);
const boolTransformer = (v) => {
    return !!v;
};

const emptyTransformer = (v) => {
    return v;
};

const getTransformer = (prop) => {
    if (prop.type === 'number') {
        return numberTransformer;
    }

    if (prop.type === 'checkbox') {
        return boolTransformer;
    }

    return emptyTransformer;
};

const withPropsTransformer = (Component) => {
    const { propInfo, defaultProps } = Component;

    function WrappedComponent(props) {
        const newProps = {};

        Object.keys(propInfo).forEach((p) => {
            if (p in props) {
                const transformer = getTransformer(propInfo[p]);
                newProps[p] = transformer(props[p], defaultProps[p], {
                    propInfo: propInfo[p],
                });
            }
        }, []);

        return <Component {...props} {...newProps} />;
    }

    return Object.assign(WrappedComponent, Component);
};

export default withPropsTransformer;
