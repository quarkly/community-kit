import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
import { clamp, formatLabel, formatPercentage, roundValue } from '../utils';

const Input = atomize.input();

const FORWARD_KEYS = ['ArrowRight', 'ArrowUp'];
const BACKWARD_KEYS = ['ArrowLeft', 'ArrowDown'];

const Handle = React.forwardRef(
    (
        {
            name,
            value,
            onChange,
            min,
            max,
            vertical,
            tickSizeRatio,
            stepSize,
            labelPrecision,
            labelRenderer,
            override,
            updated,
            valuePrecision,
            ...props
        },
        ref
    ) => {
        const mainStyle = useMemo(() => {
            if (!updated || !ref.current) return {};

            const rect = ref.current.getBoundingClientRect();
            const offsetRatio = (value - min) * tickSizeRatio;

            const side = vertical ? 'top' : 'left';
            const offset = formatPercentage(
                vertical ? 1 - offsetRatio : offsetRatio
            );
            const handleOffset = vertical ? rect.height / 2 : rect.width / 2;

            return {
                style: {
                    [side]: `calc(${offset} - ${handleOffset}px)`,
                },
                ...(vertical
                    ? {
                          left: '50%',
                          transform: 'translateX(-50%);',
                      }
                    : {
                          top: '50%',
                          transform: 'translateY(-50%);',
                      }),
            };
        }, [min, ref, updated, tickSizeRatio, value, vertical]);

        const handleLabelStyles = useMemo(() => {
            return vertical
                ? {
                      top: '50%',
                      transform: 'translate(20px, -50%)',
                  }
                : {
                      left: '50%',
                      transform: 'translate(-50%, 2px)',
                  };
        }, [vertical]);

        const handleKeyDown = (event) => {
            if (FORWARD_KEYS.includes(event.key)) {
                onChange(
                    clamp(
                        roundValue(value + stepSize, valuePrecision),
                        min,
                        max
                    )
                );
            } else if (BACKWARD_KEYS.includes(event.key)) {
                onChange(
                    clamp(
                        roundValue(value - stepSize, valuePrecision),
                        min,
                        max
                    )
                );
            }
        };

        return (
            <Box
                tabIndex={0}
                role="slider"
                ref={ref}
                onKeyDown={handleKeyDown}
                {...mainStyle}
                {...override('Slider Handle')}
                {...props}
            >
                <Input
                    width="0"
                    height="0"
                    overflow="hidden"
                    appearance="none"
                    readOnly
                    type="range"
                    name={name}
                    aria-orientation={vertical ? 'vertical' : 'horizontal'}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    value={value}
                />
                <Box {...handleLabelStyles} {...override('Handle Label')}>
                    {formatLabel(value, {
                        labelPrecision,
                        stepSize,
                        labelRenderer,
                        isHandleTooltip: true,
                    })}
                </Box>
            </Box>
        );
    }
);

Handle.displayName = 'Handle';

export default Handle;
