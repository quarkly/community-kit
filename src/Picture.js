import React, { useState, useEffect, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';

import ComponentNotice from './ComponentNotice';

const overrides = {
    'Picture Tag': {
        kind: 'Picture Tag',
        props: {
            width: '100%',
            height: 'auto',
        },
    },
};

const Picture = atomize.picture();
const Wrapper = atomize.div();
const Content = atomize.div();

const PictureComponent = ({ children, ...props }) => {
    const { override, rest } = useOverrides(props, overrides);

    const [isEmpty, setEmpty] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        setEmpty(contentRef.current?.innerHTML === '<!--child placeholder-->');
    }, [children]);

    return (
        <Wrapper {...rest}>
            <Picture {...override('Picture Tag')} display={isEmpty && 'none'}>
                <Content ref={contentRef}>
                    {React.Children.map(
                        children,
                        (child) =>
                            React.isValidElement(child) &&
                            React.cloneElement(child, {
                                container: 'picture',
                            })
                    )}
                </Content>
            </Picture>

            {isEmpty && (
                <ComponentNotice
                    message={
                        'Drag the Image and Source components here (optional)'
                    }
                />
            )}
        </Wrapper>
    );
};

export default atomize(PictureComponent)({
    name: 'Picture',
    description: {
        en:
            'Container to offer alternative versions of an image for different display/device scenarios',
        ru:
            'Контейнер для обеспечения оптимальной версии изображения для различных размеров экрана',
    },
});
