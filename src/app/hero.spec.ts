import { Hero } from './hero';

describe('Hero', () => {
  it('should create an instance', () => {
    expect(new Hero(0,'','','')).toBeTruthy();
  });
});
