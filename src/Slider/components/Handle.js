import React from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
import { clamp, formatLabel, formatPercentage } from '../utils';

const Input = atomize.input();

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
            ...props
        },
        ref
    ) => {
        const getStyle = () => {
            if (!ref.current) return {};

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
            };
        };

        const handleKeyDown = (event) => {
            if (['ArrowLeft', 'ArrowDown'].includes(event.key)) {
                onChange(clamp(value - stepSize, min, max));
            } else if (['ArrowRight', 'ArrowTop'].includes(event.key)) {
                onChange(clamp(value + stepSize, min, max));
            }
        };

        return (
            <Box
                tabIndex={0}
                role="slider"
                ref={ref}
                onKeyDown={handleKeyDown}
                {...getStyle()}
                {...override(
                    'Slider Handle',
                    vertical
                        ? 'Slider Handle Vertical'
                        : 'Slider Handle Horizontal'
                )}
                {...props}
            >
                <Input
                    width="0"
                    height="0"
                    overflow="hidden"
                    readOnly
                    type="range"
                    name={name}
                    aria-orientation={vertical ? 'vertical' : 'horizontal'}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={value}
                    value={value}
                />
                <Box
                    {...override(
                        'Handle Label',
                        vertical
                            ? 'Handle Label Vertical'
                            : 'Handle Label Horizontal'
                    )}
                >
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
