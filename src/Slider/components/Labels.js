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
        if (typeof labelValues !== 'undefined') {
            values = labelValues.filter((x) => x >= min && x <= max);
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
            labels.map(({ step, props }) => {
                const overrideKey = `Label ${`${step}`.replace('.', ',')}`;

                return (
                    <Box
                        key={step}
                        {...props}
                        {...(vertical
                            ? {
                                  transform: 'translateY(50%)',
                              }
                            : {
                                  transform: 'translateX(-50%)',
                              })}
                        {...override('Label', overrideKey, {
                            defaultKey: overrideKey,
                        })}
                    >
                        {formatLabel(step, {
                            labelPrecision,
                            stepSize,
                            labelRenderer,
                            isHandleTooltip: false,
                        })}
                    </Box>
                );
            }),
        [labels, labelPrecision, labelRenderer, override, stepSize, vertical]
    );

    const labelsStyles = useMemo(() => {
        return {
            margin: vertical ? '0 10px' : '10px 0',
        };
    }, [vertical]);

    return (
        <Box {...labelsStyles} {...override('Labels')}>
            {memoLabels}
        </Box>
    );
};

export default Labels;
