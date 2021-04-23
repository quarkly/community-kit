import React, { useState, useEffect, useMemo } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { useTheme } from 'styled-components';
import VK, { Group } from 'react-vk';
import { Box } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

const useDebounce = (value, timeout, deep) => {
    const [state, setState] = useState(value);
    const comp = deep ? useDeepCompareEffect : useEffect;
    comp(() => {
        const handler = setTimeout(() => setState(value), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);

    return state;
};

const hexColor = new RegExp(/^#[0-9A-F]{6}$/, 'i');
const useColor = (theme) => (rawColor, defaultColor) =>
    useMemo(() => {
        const isVariable = rawColor.substring(0, 2) === '--';
        const color = isVariable
            ? theme.color[rawColor.substring(2)]
            : rawColor;
        return hexColor.test(color) ? color.substring(1) : defaultColor;
    }, [theme, rawColor, defaultColor]);

const VkPageComponent = ({
    background,
    mode,
    colorBground,
    colorPrimary,
    colorAccent,
    elementId,
    groupId,
    width,
    height,
    noCover,
    wide,
    ...props
}) => {
    const theme = useTheme();
    const getColor = useColor(theme);

    const color1 = getColor(colorBground, 'FFFFFF');
    const color2 = getColor(colorPrimary, '000000');
    const color3 = getColor(colorAccent, '5181B8');

    const dOpt = useDebounce(
        {
            height,
            width,
            wide,
            no_cover: noCover,
            color1,
            color2,
            color3,
            mode,
        },
        1000,
        true
    );
    const dGroupId = useDebounce(parseInt(groupId, 10), 1000);
    const dElementId = useDebounce(elementId, 1000);

    const [key, setKey] = useState('');

    useEffect(() => {
        setKey(dGroupId + JSON.stringify(dOpt) + dElementId);
    }, [dGroupId, dOpt, dElementId]);

    return (
        <Box {...props}>
            {dGroupId ? (
                <VK key={key}>
                    <Group
                        elementId={dElementId}
                        groupId={dGroupId}
                        options={dOpt}
                    />
                </VK>
            ) : (
                <ComponentNotice message="Добавьте ID вашего сообщества на панели props" />
            )}
        </Box>
    );
};

const propInfo = {
    groupId: {
        title: 'Идентификатор сообщества',
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    elementId: {
        title: 'Идентификатор контейнера',
        control: 'input',
        type: 'text',
        category: 'Widget',
        weight: 1,
    },
    colorBground: {
        title: 'Цвет фона виджета',
        control: 'color',
        category: 'Widget',
        weight: 1,
    },
    colorPrimary: {
        title: 'Цвет текста виджета',
        control: 'color',
        category: 'Widget',
        weight: 1,
    },
    colorAccent: {
        title: 'Цвет ссылок виджета',
        control: 'color',
        category: 'Button',
        weight: 1,
    },
    mode: {
        title: 'Что отображать в виджете',
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Члены сообщества',
                    ru: 'Члены сообщества',
                },
                value: 3,
            },
            {
                title: {
                    en: 'Новости',
                    ru: 'Новости',
                },
                value: 4,
            },
            {
                title: {
                    en: 'Только название',
                    ru: 'Только название',
                },
                value: 1,
            },
        ],
        category: 'Widget',
        weight: 1,
    },
    noCover: {
        title: 'Не отображать обложки сообщества',
        control: 'checkbox',
        category: 'Widget',
        weight: 1,
    },
    wide: {
        title: 'Включить расширенный режим',
        control: 'checkbox',
        category: 'Widget',
        weight: 1,
    },
};

const defaultProps = {
    elementId: 'vk_groups',
    colorBground: '#FFFFFF',
    colorPrimary: '#000000',
    colorAccent: '#5181B8',
    mode: 3,
    noCover: false,
    wide: false,
    width: 'auto',
};

Object.assign(VkPageComponent, {
    propInfo,
    defaultProps,
});

export default VkPageComponent;
