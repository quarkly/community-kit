import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import * as exported from '../index';

const { quarklyInfo } = require('../../package.json');

describe('package export', () => {
    test('package exports components defined in quarklyInfo', () => {
        // Компонентов в экспорте пакета, должно быть не меньше
        // чем описано в quarklyInfo
        expect(Object.keys(exported)).toEqual(
            expect.arrayContaining(Object.keys(quarklyInfo.components))
        );
    });

    test.each(
        Object.keys(quarklyInfo.components).map((compName) => [compName])
    )('%s component renders correctly', (componentName) => {
        const Component = exported[componentName];
        renderer.create(
            <Router>
                <Component />
            </Router>
        );
    });
});
