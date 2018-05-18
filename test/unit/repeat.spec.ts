import * as string from '../../src/repeat';

describe('repeat', (): void => {
    it('repeat the string by a given number', (): void => {
        expect(string.repeat('foo', 2)).toBe('foofoo');
    });

    it('repeating an empty string will result in an empty string', (): void => {
        expect(string.repeat('', 2)).toBe('');
    });

    it('repeating a string less then 1 time will result in an empty string', (): void => {
        expect(() => {
            string.repeat('foo', -3);
        }).toThrow();
        expect(() => {
            string.repeat('foo', 0);
        }).toThrow();
    });

    it('the number of times to repeat must be an integer', (): void => {
        expect(() => {
            string.repeat('foo', 3.9);
        }).toThrow();
    });

    it('throw an error if the count smaller then zero', (): void => {
        expect(() => {
            string.repeat('foo', -1);
        }).toThrow();
    });
});
