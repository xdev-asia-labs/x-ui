import { describe, it, expect } from 'vitest';
import { cn, clamp, generateId, objectKeys, isServer, isNative } from '../utils';

describe('cn (classNames)', () => {
    it('merges class names', () => {
        expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('filters out falsy values', () => {
        expect(cn('foo', null, undefined, false, 'bar')).toBe('foo bar');
    });

    it('handles conditional classes', () => {
        const isActive = true;
        const isDisabled = false;
        expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active');
    });
});

describe('clamp', () => {
    it('clamps value within range', () => {
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(-5, 0, 10)).toBe(0);
        expect(clamp(15, 0, 10)).toBe(10);
    });

    it('handles edge cases', () => {
        expect(clamp(0, 0, 10)).toBe(0);
        expect(clamp(10, 0, 10)).toBe(10);
    });
});

describe('generateId', () => {
    it('generates unique IDs', () => {
        const id1 = generateId('test');
        const id2 = generateId('test');
        expect(id1).not.toBe(id2);
    });

    it('includes prefix', () => {
        const id = generateId('button');
        expect(id.startsWith('button-')).toBe(true);
    });
});

describe('objectKeys', () => {
    it('returns typed keys', () => {
        const obj = { a: 1, b: 2, c: 3 };
        const keys = objectKeys(obj);
        expect(keys).toEqual(['a', 'b', 'c']);
    });
});

describe('isServer', () => {
    it('returns false in browser environment', () => {
        expect(isServer()).toBe(false);
    });
});

describe('isNative', () => {
    it('returns false in web environment', () => {
        expect(isNative()).toBe(false);
    });
});
