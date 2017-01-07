import * as string from '../../../src/string/pad';

describe('pad', () => {
    it('place chars if front of given string', () => {
        expect(string.pad('1', '0', 4, string.Direction.Left)).toBe('0001');
    });

    it('place chars at the end of a given string', () => {
        expect(string.pad('1', '0', 4, string.Direction.Right)).toBe('1000');
    });

    it('return the same string if the length is of the desired size', () => {
        expect(string.pad('1111', '0', 4, string.Direction.Left)).toBe('1111');
    });

    it('return the same string if the length is larger then the desired size', () => {
        expect(string.pad('foobar', '0', 4, string.Direction.Left)).toBe('foobar');
    });
});
