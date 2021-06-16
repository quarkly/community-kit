import React, { useMemo } from 'react';
import { propInfo, defaultProps } from './props';
import { Box } from '@quarkly/widgets';

import ComponentNotice from '../ComponentNotice';

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
    writer,
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
            [writer === 'seller', 7],
            [writer === 'buyer' && targets !== '', 12],
            [comment, 79],
            [hint, 12],
        ];

        return conditions.reduce((acc, [c, v]) => acc + (Boolean(c) && v), 215);
    }, [writer, targets, comment, hint]);

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
                <ComponentNotice message="Add your wallet ID in the Props panel" />
            )}
        </Box>
    );
};

Object.assign(YoomoneyDonateForm, {
    title: 'YoomoneyDonate Form',
    description: {
        en: 'Form for accepting payments to YooMoney',
        ru: 'Форма для приёма платежей на кошелек Yoomoney',
    },
    propInfo,
    defaultProps,
});

export default YoomoneyDonateForm;
