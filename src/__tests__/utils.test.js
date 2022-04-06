import { parseTime, getPagesIdsByPath } from '../utils';

describe('utils', () => {
    describe('parseTime', () => {
        test.each([
            ['1000', 1000],
            ['100ms', 100],
            ['0.1s', 100],
            ['5s', 5000],
            ['1.5s', 1500],
        ])('parseTime should return %p for %sms', (timeString, timeInMs) => {
            expect(parseTime(timeString)).toBe(timeInMs);
        });
    });

    describe('getPagesIdsByPath', () => {
        window.QAPI = {
            pages: {
                root: {
                    id: 'root',
                    pageUrl: 'root',
                    name: 'root',
                    children: [
                        '624314bfddbaf70020af1b89',
                        '62457b06ddbaf70020af2334',
                        '624314bfddbaf70020af1b8c',
                    ],
                },
                '624314bfddbaf70020af1b89': {
                    id: '624314bfddbaf70020af1b89',
                    name: '404',
                    pageUrl: '404',
                },
                '62457b06ddbaf70020af2334': {
                    id: '62457b06ddbaf70020af2334',
                    pageUrl: 'foo',
                    name: 'foo',
                    children: [
                        '62457b255ac830002350df05',
                        '62457b15ddbaf70020af233e',
                    ],
                },
                '62457b255ac830002350df05': {
                    id: '62457b255ac830002350df05',
                    pageUrl: 'bar',
                    name: 'bar',
                },
                '62457b15ddbaf70020af233e': {
                    id: '62457b15ddbaf70020af233e',
                    pageUrl: 'baz',
                    name: 'baz',
                },
                '624314bfddbaf70020af1b8c': {
                    id: '624314bfddbaf70020af1b8c',
                    pageUrl: 'qux',
                    name: 'qux',
                },
            },
        };

        test('correct', () => {
            const res = getPagesIdsByPath('/foo/bar');

            expect(res).toStrictEqual([
                '62457b06ddbaf70020af2334',
                '62457b255ac830002350df05',
            ]);
        });

        test('incorrect', () => {
            const res = getPagesIdsByPath('/foo/bar/baz');

            expect(res).toStrictEqual([
                '62457b06ddbaf70020af2334',
                '62457b255ac830002350df05',
                undefined,
            ]);
        });
    });
});
