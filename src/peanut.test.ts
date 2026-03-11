import { Peanut } from './peanut';

describe('Peanut', () => {
  it('should pass', () => {
    const peanut = new Peanut();
    expect(peanut).toBeInstanceOf(Peanut);
    expect(peanut.name).toBe('This is an Peanut');
  });
  it('should not pass', () => {
    const peanut = new Peanut();
    expect(typeof peanut).toBe('Peanut');
  });
});
