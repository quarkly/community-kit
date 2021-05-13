import React, { useCallback, useMemo } from 'react';
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

    const clearOverride = useMemo(
        () =>
            (index === 0 || index === slides + 1) && {
                'data-qoverride': undefined,
            },
        [index, slides]
    );

    const getOverride = useCallback(
        (name) => ({
            ...override(name, `${name} ${numb}`),
            ...clearOverride,
        }),
        [numb]
    );
    
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
        <Box {...getOverride('Slide')} {...widthStyles} {...heightStyles}>
            <Image {...getOverride('Slide Image')} />
            {(showHead || showText || showLink) && (
                <Box {...getOverride('Slide Content')}>
                    {showHead && <Text {...getOverride('Slide Head')} />}
                    {showText && <Text {...getOverride('Slide Text')} />}
                    {showLink && <Link {...getOverride('Slide Link')} />}
                </Box>
            )}
        </Box>
    );
};

export default Slide;
