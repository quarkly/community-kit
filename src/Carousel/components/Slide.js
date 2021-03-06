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
        [numb, clearOverride, override]
    );

    return (
        <SlideWrapper {...getOverride('Slide')}>
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
