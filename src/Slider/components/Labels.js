import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import { approxEqual, formatLabel, formatPercentage } from '../utils';

const Labels = ({
    vertical,
    min,
    max,
    labelValues,
    labelStepSize,
    labelPrecision,
    labelRenderer,
    stepSize,
    override,
}) => {
    const labels = useMemo(() => {
        const getLabelStyle = (step) => {
            const offset = (step - min) / (max - min);
            const side = vertical ? 'bottom' : 'left';

            return {
                style: {
                    [side]: formatPercentage(offset),
                },
            };
        };

        let values = [];
        if (Array.isArray(labelValues)) {
            values = labelValues;
        } else if (typeof labelValues === 'string' && labelValues.length > 0) {
            values = labelValues.split(',').map(Number);
        } else {
            for (
                let i = min;
                i < max || approxEqual(i, max);
                i += labelStepSize
            ) {
                values.push(i);
            }
        }

        return values.map((value) => ({
            step: value,
            props: getLabelStyle(value),
        }));
    }, [labelStepSize, labelValues, max, min, vertical]);

    const memoLabels = useMemo(
        () =>
            labels.map(({ step, props }) => (
                <Box
                    key={step}
                    {...props}
                    {...override(
                        'Label',
                        vertical ? 'Label Vertical' : 'Label Horizontal'
                    )}
                >
                    {formatLabel(step, {
                        labelPrecision,
                        stepSize,
                        labelRenderer,
                        isHandleTooltip: false,
                    })}
                </Box>
            )),
        [labels, labelPrecision, labelRenderer, override, stepSize, vertical]
    );

    return (
        <Box
            {...override(
                'Labels',
                vertical ? 'Labels Vertical' : 'Labels Horizontal'
            )}
        >
            {memoLabels}
        </Box>
    );
};

export default Labels;
