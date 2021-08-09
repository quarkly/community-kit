import React from 'react';
import { Box } from '@quarkly/widgets';
import ShareButton from './ShareButton';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'ShareButton',
    component: ShareButton,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

const stylesButton = {
    margin: '8px',
};

export const StoryDefault = (props) => <ShareButton {...props} />;

export const StoryAllServices = (props) => (
    <Box>
        <ShareButton {...stylesButton} {...props} service="Facebook" />
        <ShareButton {...stylesButton} {...props} service="Twitter" />
        <ShareButton {...stylesButton} {...props} service="Telegram" />
        <ShareButton {...stylesButton} {...props} service="WhatsApp" />
        <ShareButton {...stylesButton} {...props} service="LinkedIn" />
        <ShareButton {...stylesButton} {...props} service="Pinterest" />
        <ShareButton {...stylesButton} {...props} service="VK" />
        <ShareButton {...stylesButton} {...props} service="Odnoklassniki" />
        <ShareButton {...stylesButton} {...props} service="Reddit" />
        <ShareButton {...stylesButton} {...props} service="Tumblr" />
        <ShareButton {...stylesButton} {...props} service="Viber" />
        <ShareButton {...stylesButton} {...props} service="Line" />
        <ShareButton {...stylesButton} {...props} service="Weibo" />
        <ShareButton {...stylesButton} {...props} service="Pocket" />
    </Box>
);

StoryDefault.storyName = 'Default';
StoryAllServices.storyName = 'All Services';
