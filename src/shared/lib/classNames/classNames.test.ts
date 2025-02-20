import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('classNames with 1 arg', () => {
        expect(classNames('someClass', {}, []))
            .toBe('someClass');
    });
    test('classNames with mods', () => {
        expect(classNames('someClass', { hovered: true }, []))
            .toBe('someClass hovered');
    });
    test('classNames with additional', () => {
        expect(classNames('someClass', { hovered: false }, ['someClass1 someClass2']))
            .toBe('someClass someClass1 someClass2');
    });
    test('classNames not with mods', () => {
        expect(classNames('someClass', { hovered: false }, []))
            .not.toBe('someClass hovered');
    });
});
