import React, { useEffect, useState } from 'react';
import { Box } from '@quarkly/widgets';
import { FacebookProvider, Like } from 'react-facebook';

import ComponentNotice from './ComponentNotice';

const useDebounce = (value, timeout = 1000) => {
    const [state, setState] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setState(value), timeout);
        return () => clearTimeout(handler);
    }, [value, timeout]);
    return state;
};

const FacebookLike = ({
    appId,
    href,
    language,
    colorScheme,
    showShare,
    showFaces,
    layout,
    size,
    action,
    kidDirectedSite,
    referral,
    ...props
}) => {
    const dAppID = useDebounce(appId);

    return (
        <Box {...props}>
            {dAppID ? (
                <FacebookProvider
                    key={dAppID + language}
                    appId={dAppID}
                    language={language}
                >
                    <Like
                        colorScheme={colorScheme}
                        share={showShare === 'show'}
                        showFaces={showFaces}
                        href={href}
                        layout={layout}
                        size={size}
                        action={action}
                        kidDirectedSite={kidDirectedSite}
                        referral={referral}
                    />
                </FacebookProvider>
            ) : (
                <ComponentNotice message="Add your Facebook App ID in the Props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    appId: {
        title: {
            en: 'Facebook app ID',
            ru: 'ID приложения Facebook',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    href: {
        title: {
            en: 'Link to the page',
            ru: 'Ссылка на страницу',
        },
        control: 'input',
        type: 'text',
        category: ' Main',
        weight: 1,
    },
    language: {
        title: {
            en: 'Widget language',
            ru: 'Язык загружаемого виджета',
        },
        control: 'select',
        variants: [
            {
                title: 'English',
                value: 'en_US',
            },
            {
                title: 'Русский',
                value: 'ru_RU',
            },
        ],
        category: ' Main',
        weight: 1,
    },
    colorScheme: {
        title: {
            en: 'Color scheme',
            ru: 'Цветовая схема',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Light',
                    ru: 'Светлая',
                },
                value: 'light',
            },
            {
                title: {
                    en: 'Dark',
                    ru: 'Тёмная',
                },
                value: 'dark',
            },
        ],
        category: 'Button',
        weight: 1,
    },
    showShare: {
        title: {
            en: "'Share' button",
            ru: 'Кнопка "Поделиться"',
        },
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Показать',
                    ru: 'Показать',
                },
                value: 'show',
            },
            {
                title: {
                    en: 'Скрыть',
                    ru: 'Скрыть',
                },
                value: 'hide',
            },
        ],
        category: 'Button',
        weight: 1,
    },
    layout: {
        title: {
            en: 'Layout',
            ru: 'Макет',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Стандартный вид',
                    ru: 'Стандартный вид',
                },
                value: 'standard',
            },
            {
                title: {
                    en: 'Контейнер со счётчиком',
                    ru: 'Контейнер со счётчиком',
                },
                value: 'box_count',
            },
            {
                title: {
                    en: 'Кнопка со счётчиком',
                    ru: 'Кнопка со счётчиком',
                },
                value: 'button_count',
            },
            {
                title: {
                    en: 'Простая кнопка',
                    ru: 'Простая кнопка',
                },
                value: 'button',
            },
        ],
        category: 'Button',
        weight: 1,
    },
    size: {
        title: {
            en: 'Button size',
            ru: 'Размер кнопки',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Маленькая',
                    ru: 'Маленькая',
                },
                value: 'small',
            },
            {
                title: {
                    en: 'Большая',
                    ru: 'Большая',
                },
                value: 'large',
            },
        ],
        category: 'Button',
        weight: 1,
    },
    action: {
        title: {
            en: 'On click action',
            ru: 'Действие по клику',
        },
        control: 'select',
        variants: [
            {
                title: {
                    en: 'Like',
                    ru: 'Like',
                },
                value: 'like',
            },
            {
                title: {
                    en: 'Recommend',
                    ru: 'Recommend',
                },
                value: 'recommend',
            },
        ],
        category: 'Button',
        weight: 1,
    },
    kidDirectedSite: {
        title: {
            en: 'Site for kids',
            ru: 'Сайт для детей',
        },
        control: 'checkbox',
        category: 'Advanced',
        weight: 1,
    },
    referral: {
        title: {
            en: 'UTM tag',
            ru: 'UTM-метка',
        },
        control: 'input',
        type: 'text',
        category: 'Advanced',
        weight: 1,
    },
};

const defaultProps = {
    language: 'en_US',
    colorScheme: 'light',
    showShare: 'hide',
    layout: 'standard',
    size: 'small',
    action: 'like',
    kidDirectedSite: false,
    showFaces: false,
};

Object.assign(FacebookLike, {
    title: 'Facebook Like',
    description: {
        en: 'Use this component to add a "Like" button on Facebook',
        ru: 'Компонент для добавления кнопки «Нравится» Facebook',
    },
    propInfo,
    defaultProps,
});

export default FacebookLike;
