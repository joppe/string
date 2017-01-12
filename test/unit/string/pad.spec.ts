import * as string from '../../../src/string/pad';

describe('pad', ():void => {
    it('place chars if front of given string', ():void => {
        expect(string.pad('1', '0', 4, string.padType.Left)).toBe('0001');
    });

    it('place chars at the end of a given string', ():void => {
        expect(string.pad('1', '0', 4, string.padType.Right)).toBe('1000');
    });

    it('return the same string if the length is of the desired size', ():void => {
        expect(string.pad('1111', '0', 4, string.padType.Left)).toBe('1111');
    });

    it('return the same string if the length is larger then the desired size', ():void => {
        expect(string.pad('foobar', '0', 4, string.padType.Left)).toBe('foobar');
    });
});
