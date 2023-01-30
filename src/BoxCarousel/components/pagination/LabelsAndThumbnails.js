import React from 'react';
import { Box, Image, Text } from '@quarkly/widgets';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { usePageButtonProps } from './utils';

export const Item = ({ index, labels, thumbnails }) => {
    const { override } = useBoxCarouselData();

    const { isCurrent, clickHandler } = usePageButtonProps(index);

    return (
        <Box {...override('Pagination Item', `Pagination Item ${index}`)}>
            {thumbnails && (
                <Image
                    {...override(
                        'Thumbnail',
                        `Thumbnail ${index}`,
                        isCurrent && 'Thumbnail :active',
                        {
                            defaultKey: `Thumbnail ${index}`,
                        }
                    )}
                    onClick={clickHandler}
                />
            )}
            {labels && (
                <Text
                    {...override(
                        'Label',
                        `Label ${index}`,
                        isCurrent && 'Label :active',
                        {
                            defaultKey: `Label ${index}`,
                        }
                    )}
                    onClick={clickHandler}
                />
            )}
            <Box
                {...override(
                    'Pagination Underline',
                    `Pagination Underline ${index}`,
                    isCurrent && 'Pagination Underline :active'
                )}
            />
        </Box>
    );
};

const LabelsAndThumbnails = ({ labels, thumbnails }) => {
    const { slidesCount } = useBoxCarouselData();

    return (
        <Box display="flex">
            {[...Array(slidesCount)].map((_, index) => (
                <Item
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    labels={labels}
                    thumbnails={thumbnails}
                    index={index}
                />
            ))}
        </Box>
    );
};

export default LabelsAndThumbnails;
