import React, { useCallback, useMemo } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Input, Image } from '@quarkly/widgets';
import { overrides, propInfo, defaultProps } from './props';
import { getAPI } from '../utils';

const Form = atomize.form();

const PayPalDonateButton = ({
    newTab,
    business,
    amount,
    itemName,
    itemNumber,
    currencyCode,
    buttonImage,
    ...props
}) => {
    const { override, rest } = useOverrides(props, overrides);

    const variables = useMemo(
        () => [
            ['cmd', '_donations', 'CMD'],
            ['business', business, 'Business'],
            ['item_name', itemName, 'Name'],
            ['item_number', itemNumber, 'Number'],
            ['amount', amount, 'Amount'],
            ['currency_code', currencyCode, 'Currency'],
        ],
        [business, itemName, itemNumber, amount, currencyCode]
    );

    const preventSubmitForm = useCallback((e) => {
        if (getAPI().mode === 'development') {
            e.preventDefault();
        }
    }, []);

    return (
        <Form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target={newTab ? '_blank' : '_self'}
            onSubmit={preventSubmitForm}
            display="inline-block"
            {...rest}
        >
            {variables.map(([name, value, title]) => (
                <Input
                    key={`input-${title}`}
                    type="hidden"
                    name={name}
                    defaultValue={value}
                    {...override('Input', `Input ${title}`)}
                />
            ))}
            <Input
                type="image"
                name="submit"
                src={buttonImage}
                alt="Donate"
                {...override('Input', 'Input Button')}
            />
            <Image
                alt=""
                width="1"
                height="1"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                {...override('Image')}
            />
        </Form>
    );
};

Object.assign(PayPalDonateButton, {
    title: 'PaypalDonate Button',
    description: {
        ru: 'Простая кнопка для сбора пожертвований через PayPal',
    },
    propInfo,
    defaultProps,
    overrides,
});

export default PayPalDonateButton;
