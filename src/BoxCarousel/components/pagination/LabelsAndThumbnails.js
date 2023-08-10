import React from 'react';
import { Box, Image, Text } from '@quarkly/widgets';
import { useBoxCarouselData } from '../../contexts/BoxCarouselData';
import { usePageButtonProps } from './utils';

export const Item = ({ index, labels, thumbnails }) => {
    const { override } = useBoxCarouselData();

    const { isCurrent, clickHandler } = usePageButtonProps(index);

    return (
        <Box {...override('Pagination Item', `Pagination Item ${index + 1}`)}>
            {thumbnails && (
                <Image
                    {...override(
                        'Thumbnail',
                        `Thumbnail ${index + 1}`,
                        isCurrent && 'Thumbnail :active',
                        {
                            defaultKey: `Thumbnail ${index + 1}`,
                        }
                    )}
                    onClick={clickHandler}
                />
            )}
            {labels && (
                <Text
                    {...override(
                        'Label',
                        `Label ${index + 1}`,
                        isCurrent && 'Label :active',
                        {
                            defaultKey: `Label ${index + 1}`,
                        }
                    )}
                    onClick={clickHandler}
                />
            )}
            <Box
                {...override(
                    'Pagination Underline',
                    `Pagination Underline ${index + 1}`,
                    isCurrent && 'Pagination Underline :active',
                    {
                        defaultKey: `Pagination Underline ${index + 1}`,
                    }
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
