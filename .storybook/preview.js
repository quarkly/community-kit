import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Theme from '@quarkly/theme';
import Wrapper from './decorators/Wrapper';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

export const decorators = [
    (Story) => (
        <MemoryRouter>
            <Theme>
                <Wrapper>{Story()}</Wrapper>
            </Theme>
        </MemoryRouter>
    ),
];
