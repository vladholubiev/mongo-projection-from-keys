const m = require('.');

it('should export a module', () => {
  expect(m).toBeInstanceOf(Function);
});

it('should export a function', () => {
  expect(m).toBeInstanceOf(Function);
});

it('should return mongo projection with include/exclude', () => {
  expect(m({include: ['a'], exclude: ['b']})).toEqual({
    a: 1,
    b: 0
  });
});

it('should return mongo projection with include only', () => {
  expect(m({include: ['a']})).toEqual({
    a: 1
  });
});

it('should return mongo projection with exclude only', () => {
  expect(m({exclude: ['a']})).toEqual({
    a: 0
  });
});

it('should return mongo projection with exclude overruled', () => {
  expect(m({include: ['a'], exclude: ['a']})).toEqual({
    a: 0
  });
});
