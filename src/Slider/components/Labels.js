import React from 'react';
import { Box } from '@quarkly/widgets';
import { approxEqual, formatLabel } from '../utils';
import formatPercentage from '../utils/formatPercentage';

const Labels = ({
    vertical,
    min,
    max,
    labelValues,
    labelStepSize,
    labelPrecision,
    stepSize,
    override,
}) => {
    const getLabelValues = () => {
        if (typeof labelValues !== 'undefined') {
            return labelValues;
        }

        const values = [];
        for (let i = min; i < max || approxEqual(i, max); i += labelStepSize) {
            values.push(i);
        }

        return values;
    };

    const getLabelStyle = (step) => {
        const offset = (step - min) / (max - min);
        const side = vertical ? 'bottom' : 'left';

        return {
            style: {
                [side]: formatPercentage(offset),
            },
        };
    };

    return (
        <Box
            {...override(
                'Labels',
                vertical ? 'Labels Vertical' : 'Labels Horizontal'
            )}
        >
            {getLabelValues().map((step) => {
                return (
                    <Box
                        key={step}
                        {...getLabelStyle(step)}
                        {...override(
                            'Label',
                            vertical ? 'Label Vertical' : 'Label Horizontal'
                        )}
                    >
                        {formatLabel(step, { labelPrecision, stepSize })}
                    </Box>
                );
            })}
        </Box>
    );
};

export default Labels;
