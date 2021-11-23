import React from 'react';
import FormProvider from './FormProvider';

const withForm = (PassedComponent) => {
    const WrappedComponent = (props) => (
        <FormProvider>
            <PassedComponent {...props} />
        </FormProvider>
    );

    return WrappedComponent;
};

export default withForm;
