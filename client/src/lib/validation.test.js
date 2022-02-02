import { hasProductNameMinLength } from './validation';

describe('validation for product', () => {
  it('has a sufficient long name', () => {
    expect(hasProductNameMinLength('Vanillekipferle', 30)).toBe(true);
  });
});
