import React from 'react';
import CSVToTable from './CSVToTable';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'CSVToTable',
    component: CSVToTable,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <CSVToTable {...props} />;

StoryDefault.storyName = 'Default';
