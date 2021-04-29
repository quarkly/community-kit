import React, { useMemo } from 'react';
import { Box, Text, Link, Image } from '@quarkly/widgets';

const Slide = ({
    index,
    slides,
    numb,
    width,
    height,
    showHead,
    showText,
    showLink,
    override,
}) => {
    const clearOverrides = useMemo(
        () =>
            (index === 0 || index === slides + 1) && {
                'data-qoverride': undefined,
            },
        [index, slides]
    );

    const slideOverrides = {
        slide: {
            ...override('Slide', `Slide ${numb}`),
            ...clearOverrides,
        },
        image: {
            ...override('Slide Image', `Slide Image ${numb}`),
            ...clearOverrides,
        },
        content: {
            ...override('Slide Content', `Slide Content ${numb}`),
            ...clearOverrides,
        },
        head: {
            ...override('Slide Head', `Slide Head ${numb}`),
            ...clearOverrides,
        },
        text: {
            ...override('Slide Text', `Slide Text ${numb}`),
            ...clearOverrides,
        },
        link: {
            ...override('Slide Link', `Slide Link ${numb}`),
            ...clearOverrides,
        },
    };

    const widthStyles = useMemo(
        () => ({
            width,
            'min-width': width,
            'max-width': width,
        }),
        [width]
    );
    const heightStyles = useMemo(
        () =>
            height !== 'auto' && {
                height,
                'min-height': height,
                'max-height': height,
            },
        [height]
    );

    return (
        <Box {...slideOverrides.slide} {...widthStyles} {...heightStyles}>
            <Image {...slideOverrides.image} />
            {(showHead || showText || showLink) && (
                <Box {...slideOverrides.content}>
                    {showHead && <Text {...slideOverrides.head} />}
                    {showText && <Text {...slideOverrides.text} />}
                    {showLink && <Link {...slideOverrides.link} />}
                </Box>
            )}
        </Box>
    );
};

export default Slide;
