import { parseTime } from '../utils';

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
});
