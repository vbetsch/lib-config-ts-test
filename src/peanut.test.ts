import { Peanut } from './peanut';

describe('Peanut', () => {
  it('should be an Peanut', () => {
    const peanut = new Peanut();
    expect(peanut).toBeInstanceOf(Peanut);
    expect(typeof peanut).toBe('Peanut');
    expect(peanut.name).toBe('This is an Peanut');
  });
});
