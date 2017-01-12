import {numberFormat} from '../../../src/string/numberFormat';

describe('numberFormat', ():void => {
    it('format any number', ():void => {
        expect(numberFormat(2.12324, 2, '@', '#')).toBe('2@12');
        expect(numberFormat(1222.12324, 2, '@', '#')).toBe('1#222@12');
        expect(numberFormat(12343452, 2, '.', '')).toBe('12343452.00');
        expect(numberFormat(1234345.2, 2, '.', ',')).toBe('1,234,345.20');
    });
});
