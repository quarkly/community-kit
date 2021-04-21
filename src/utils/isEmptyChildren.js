import React from 'react';

const isPlaceholder = (child) =>
    child && child.props && child.props.text === 'child placeholder';
const isOverride = (child) =>
    child &&
    child.props &&
    typeof child.props.slot === 'string' &&
    child.props.slot.length > 0;

export default function isEmptyChildren(children) {
    const childrenArray = React.Children.toArray(children);

    return !childrenArray.some(
        (child) => child && !isPlaceholder(child) && !isOverride(child)
    );
}
