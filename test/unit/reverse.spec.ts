import { reverse } from '@apestaartje/string/reverse';

describe('reverse', (): void => {
    it('reverse a string', (): void => {
        expect(reverse('hello world')).toBe('dlrow olleh');
        expect(reverse(reverse('hello world'))).toBe('hello world');
    });
});
