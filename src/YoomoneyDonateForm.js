import React, { useMemo } from 'react';
import { Box } from '@quarkly/widgets';

import ComponentNotice from './ComponentNotice';

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
        writer: fixedTarget ? 'seller' : 'buyer',
        quickpay: 'shop',
    });

    const height = useMemo(() => {
        const conditions = [
            [fixedTarget, 7],
            [!fixedTarget && targets !== '', 12],
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
                <ComponentNotice message="Insert account id in props panel" />
            )}
        </Box>
    );
};

const propInfo = {
    account: {
        title: 'Account',
        category: 'Main',
        description: {
            en: 'Yoomoney account ID',
        },
        weight: 1,
        control: 'input',
    },
    targets: {
        title: 'Targets',
        category: 'Main',
        description: {
            en: 'Purpose of transfer',
        },
        control: 'input',
    },
    buttonText: {
        title: 'Text',
        category: 'Button appearance',
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
    },
    fixedTarget: {
        title: 'Fixed target',
        category: 'Main',
        control: 'checkbox',
    },
    sum: {
        title: 'Sum',
        category: 'Main',
        description: {
            en: 'Transfer amount',
        },
        control: 'input',
    },
    fio: {
        title: 'Full name',
        category: 'Info',
        description: {
            en: 'Request full name at the time of transfer',
        },
        control: 'checkbox',
    },
    email: {
        title: 'Email',
        category: 'Info',
        description: {
            en: 'Request email at the time of transfer',
        },
        control: 'checkbox',
    },
    phone: {
        title: 'Phone',
        category: 'Info',
        description: {
            en: 'Request phone at the time of transfer',
        },
        control: 'checkbox',
    },
    address: {
        title: 'Address',
        category: 'Info',
        description: {
            en: 'Request address at the time of transfer',
        },
        control: 'checkbox',
    },
    comment: {
        title: 'Comment',
        category: 'Info',
        description: {
            en: 'Request comment at the time of transfer',
        },
        control: 'checkbox',
    },
    hint: {
        title: 'Comment Hint',
        category: 'Info',
        description: {
            en: 'Request comment at the time of transfer',
        },
        control: 'input',
    },
    successURL: {
        title: 'Redirect URL',
        category: 'Main',
        description: {
            en: 'Redirect after transfer',
        },
        control: 'input',
    },
    payment: {
        title: 'Use bank card',
        description: {
            en: 'Purpose of transfer',
        },
        control: 'checkbox',
    },
    mobilePayment: {
        title: 'Use mobile payment',
        description: {
            en: 'Purpose of transfer',
        },
        control: 'checkbox',
    },
};

const defaultProps = {
    targets: 'Помочь проекту',
    buttonText: 11,
    successURL: '',
    sum: '0',
    fixedTarget: true,
    hint: '',
};

Object.assign(YoomoneyDonateForm, {
    title: 'YoomoneyDonateForm',
    description: {
        ru: 'Форма поможет собрать деньги на кошелек Yoomoney',
    },
    propInfo,
    defaultProps,
});

export default YoomoneyDonateForm;
