import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
import { clamp, formatLabel, formatPercentage } from '../utils';

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
            ...props
        },
        ref
    ) => {
        const mainStyle = useMemo(() => {
            if (!updated) return {};

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
        }, [min, ref, updated, tickSizeRatio, value, vertical]);

        const handleKeyDown = (event) => {
            if (FORWARD_KEYS.includes(event.key)) {
                onChange(clamp(value + stepSize, min, max));
            } else if (BACKWARD_KEYS.includes(event.key)) {
                onChange(clamp(value - stepSize, min, max));
            }
        };

        return (
            <Box
                tabIndex={0}
                role="slider"
                ref={ref}
                onKeyDown={handleKeyDown}
                {...mainStyle}
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
