import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import ReCAPTCHA from 'react-google-recaptcha';
import ComponentNotice from '../ComponentNotice';
import { propInfo, defaultProps } from './props';

const ReCaptcha = ({ sitekey, onChange, theme, size, ...props }) => {
    const key = useMemo(() => Object.values({ sitekey, theme, size }).join(), [
        sitekey,
        theme,
        size,
    ]);

    return (
        <Box display="inline-block" {...props}>
            {sitekey ? (
                <ReCAPTCHA
                    key={key}
                    sitekey={sitekey}
                    onChange={onChange}
                    theme={theme}
                    size={size}
                />
            ) : (
                <ComponentNotice message="Add your API key in the Props panel" />
            )}
        </Box>
    );
};

export default Object.assign(ReCaptcha, {
    title: 'reCAPTCHA V2',
    description: {
        en:
            'reCAPTCHA is a free service that protects your site from spam and abuse',
        ru: 'reCAPTCHA - это бесплатный сервис, защищающий ваш сайт от спама',
    },
    propInfo,
    defaultProps,
});
