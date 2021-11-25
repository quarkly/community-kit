import React from 'react';
import { Box, Input, Button } from '@quarkly/widgets';
import { Override } from '@quarkly/components';
import MailChimp from './MailChimp';
import { propInfo, defaultProps } from './props';
import { argTypes } from '../modules';

export default {
    title: 'MailChimp',
    component: MailChimp,
    args: defaultProps,
    argTypes: argTypes(propInfo, defaultProps),
};

export const StoryDefault = (props) => <MailChimp {...props} />;

export const StoryWithInputs = (props) => (
    <Box>
        <MailChimp {...props} display="flex" flex-direction="column">
            <Input name="EMAIL" />
            <Input name="FNAME" />
            <Button type="submit">Submit</Button>
        </MailChimp>
    </Box>
);

export const StoryWithOverrides = (props) => (
    <Box>
        <MailChimp {...props} display="flex" flex-direction="column">
            <Override slot="Form" padding="20px" />
            <Input required type="email" name="EMAIL" />
            <Button type="submit">Submit</Button>
        </MailChimp>
    </Box>
);
