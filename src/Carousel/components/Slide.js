import React, { useCallback, useMemo } from 'react';
import { Box, Text, Link, Image } from '@quarkly/widgets';

const slidesWrapperList = {
    box: Box,
    link: Link,
};

const Slide = ({
    index,
    slides,
    slidesWrapper,
    numb,
    width,
    height,
    showHead,
    showText,
    showLink,
    override,
}) => {
    const SlideWrapper = useMemo(() => slidesWrapperList[slidesWrapper], [
        slidesWrapper,
    ]);

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
        <SlideWrapper
            {...getOverride('Slide')}
            {...widthStyles}
            {...heightStyles}
        >
            <Image {...getOverride('Slide Image')} />
            {(showHead || showText || showLink) && (
                <Box {...getOverride('Slide Content')}>
                    {showHead && <Text {...getOverride('Slide Head')} />}
                    {showText && <Text {...getOverride('Slide Text')} />}
                    {showLink && <Link {...getOverride('Slide Link')} />}
                </Box>
            )}
        </SlideWrapper>
    );
};

export default Slide;
