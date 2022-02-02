import { hasProductNameMinLength } from './validation';

describe('validation for product', () => {
  it('has a sufficient long name', () => {
    expect(hasProductNameMinLength('', 3)).toBe(true);
  });
});
