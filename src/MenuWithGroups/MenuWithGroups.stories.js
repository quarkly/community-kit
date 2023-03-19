import React from 'react';
import MenuWithGroups from './MenuWithGroups';
import { argTypes } from '../modules';

export default {
    title: 'MenuWithGroups',
    component: MenuWithGroups,
    args: MenuWithGroups.defaultProps,
    argTypes: argTypes(MenuWithGroups.propInfo, MenuWithGroups.defaultProps),
};

export const StoryDefault = (props) => <MenuWithGroups {...props} />;
