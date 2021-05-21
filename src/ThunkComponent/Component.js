import React from 'react';
import { connect } from 'react-redux';

const Component = ({ counter, ...restProps }) => {
    return <div {...restProps}>{`Counter ${counter}`}</div>;
};

const mapStateToProps = (state, props) => ({
    ...state,
    ...props,
});

const mapDispatchToProps = () => null;

export default connect(mapStateToProps, mapDispatchToProps)(Component);
