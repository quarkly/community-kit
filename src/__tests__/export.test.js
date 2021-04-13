import * as exported from '../index';

describe('package export', () => {
    it('exports components defined in quarklyInfo', () => {
        const { quarklyInfo } = require('../../package.json');

        // Компонентов в экспорте пакета, должно быть не меньше
        // чем описано в quarklyInfo
        expect(Object.keys(exported)).toEqual(
            expect.arrayContaining(Object.keys(quarklyInfo.components))
        );
    });
});
