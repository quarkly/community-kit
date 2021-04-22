import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';

const yoomoneyUrl = new URL('https://yoomoney.ru/quickpay/shop-widget');

const YoomoneyDonateForm = ({
    account,
    buttonText,
    buttonSize,
    buttonColor,
    fio,
    email,
    phone,
    address,
    comment,
    hint,
    sum,
    fixedTarget,
    payment,
    mobilePayment,
    targets,
    successURL,
    ...props
}) => {
    const searchParams = new URLSearchParams({
        account,
        successURL,
        targets,
        hint,
        'targets-hint': targets,
        'default-sum': sum,
        'button-text': buttonText,
        ...(payment && { 'payment-type-choice': 'on' }),
        ...(mobilePayment && { 'mobile-payment-type-choice': 'on' }),
        fio: fio ? 'on' : 'off',
        email: email ? 'on' : 'off',
        phone: phone ? 'on' : 'off',
        address: address ? 'on' : 'off',
        comment: comment ? 'on' : 'off',
        writer,
        quickpay: 'shop',
    });

    const height = useMemo(() => {
        const conditions = [
            [fixedTarget === 'seller', 7],
            [fixedTarget === 'buyer' && targets !== '', 12],
            [comment, 79],
            [hint, 12],
        ];

        return conditions.reduce((acc, [c, v]) => acc + (Boolean(c) && v), 215);
    }, [fixedTarget, targets, comment, hint]);

    return (
        <Box width="100%" height={height} {...props}>
            {account ? (
                <iframe
                    title="YoomoneyDonateForm"
                    src={`${yoomoneyUrl}?${searchParams.toString()}`}
                    frameBorder="0"
                    allowtransparency="true"
                    scrolling="no"
                    width="100%"
                    height={height}
                />
            ) : (
                'Insert account id in props panel'
            )}
        </Box>
    );
};

const propInfo = {
    account: {
        title: 'ID кошелька Yoomoney',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    writer: {
        title: 'Кто указывает назначение перевода',
        control: 'radio-group',
        variants: [
            {
                title: {
                    en: 'Продавец',
                    ru: 'Продавец'
                },
                value: 'seller'
            },
            {
                title: {
                    en: 'Покупатель',
                    ru: 'Покупатель'
                },
                value: 'buyer'
            }
        ],
        category: 'Main',
        weight: 1,
    },
    targets: {
        title: 'Назначение перевода',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    sum: {
        title: 'Сумма перевода',
        category: 'Main',
        control: 'input',
        weight: 1,
    },
    buttonText: {
        title: 'Текст на кнопке',
        control: 'select',
        variants: [
            {
                title: 'Перевести',
                value: '11',
            },
            {
                title: 'Отправить',
                value: '12',
            },
            {
                title: 'Подарить',
                value: '13',
            },
            {
                title: 'Пожертвовать',
                value: '14',
            },
        ],
        category: 'Main',
        weight: 1,
    },
    payment: {
        title: 'Использовать банковскую карту',
        description: {
            ru: 'Возможность перевода через банковскую карту (может взиматься дополнительная комиссия)',
        },
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
    fio: {
        title: 'Запросить полное имя у отправителя',
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    email: {
        title: 'Запросить эл. почту у отправителя',
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    phone: {
        title: 'Запросить номер телефона у отправителя',
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    address: {
        title: 'Запросить адрес у отправителя',
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    comment: {
        title: 'Запросить комментарий у отправителя',
        control: 'checkbox',
        category: 'Info',
        weight: 1,
    },
    hint: {
        title: 'Подсказка для отправителя',
        control: 'input',
        category: 'Info',
        weight: 1,
    },
    successURL: {
        title: 'После перевода перейти на страницу',
        control: 'input',
        type: 'text',
        category: 'Main',
        weight: 1,
    },
    mobilePayment: {
        title: 'Использовать мобильную версию',
        control: 'checkbox',
        category: 'Main',
        weight: 1,
    },
};

const defaultProps = {
    writer: 'seller',
    targets: 'Помочь проекту',
    sum: '0',
    buttonText: 11,
    successURL: '',
    hint: '',
};

Object.assign(YoomoneyDonateForm, {
    title: 'YoomoneyDonateForm',
    propInfo,
    defaultProps,
});

export default YoomoneyDonateForm;
