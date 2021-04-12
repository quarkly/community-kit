import React from 'react';
import renderer from 'react-test-renderer';
import Tooltip from '../Tooltip';

describe('Tooltip component', () => {
    it('renders correctly without params', () => {
        const component = renderer.create(<Tooltip />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
