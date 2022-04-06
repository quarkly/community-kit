import React from 'react';
import atomize from '@quarkly/atomize';
import { useOverrides } from '@quarkly/components';
import { Image } from '@quarkly/widgets';

const overrides = {
    'Picture Tag': {
        kind: 'Picture Tag',
        props: {
            display: 'inline-block',
        },
    },
    Image: {
        kind: 'Image',
        props: {
            src:
                'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=200',
        },
    },
};

const Picture = atomize.picture();
const Wrapper = atomize.div();

const PictureComponent = (props) => {
    const { override, children, rest } = useOverrides(props, overrides);

    return (
        <Wrapper display="inline-block" font-size="0" {...rest}>
            <Picture {...override('Picture Tag')}>
                {React.Children.map(
                    children,
                    (child) =>
                        React.isValidElement(child) &&
                        React.cloneElement(child, {
                            container: 'picture',
                        })
                )}
                <Image {...override('Image')} />
            </Picture>
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
    overrides,
});
