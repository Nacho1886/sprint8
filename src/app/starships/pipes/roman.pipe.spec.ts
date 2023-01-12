import { RomanPipe } from './roman.pipe';


describe('Roman pipe', () => {
    const pipe = new RomanPipe();

    it('transforms "abc" to "Abc"', () => {
        expect(pipe.transform()).toBe('Abc');
    });

    it('transforms "abc def" to "Abc Def"', () => {
        expect(pipe.transform('abc def')).toBe('Abc Def');
    });
    it('create an instance', () => {
        console.log("🚀 ~ file: roman.pipe.spec.ts:7 ~ it ~ pipe", pipe)
        expect(pipe).toBeTruthy();
    });
});