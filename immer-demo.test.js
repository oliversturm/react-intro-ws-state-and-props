import { test, expect } from 'vitest';
import { produce, freeze } from 'immer';

test('immer', () => {
  // This is a source object. We don't want to change it in-place, so
  // we freeze it right away.
  const oli = freeze({ name: 'Oli', age: 23 });

  // It is impossible to change the age property now
  //  oli.age = 64;
  expect(oli.age).toEqual(23);

  // Instead of modifying the object directly, we produce
  // a new copy while applying some changes
  const agedOli = produce(oli, (draft) => {
    draft.age = 42;
  });

  // Now the new object has the new value...
  expect(agedOli.age).toEqual(42);
  // ... while the old one still has the old value
  expect(oli.age).toEqual(23);

  // Instead of the imperative change syntax above, you
  // can also simply return a new object constructed using
  // a more common 'immutable data' style.
  const agedOli2 = produce(oli, () => ({
    ...oli,
    age: 47,
  }));
  expect(agedOli2.age).toEqual(47);
  expect(oli.age).toEqual(23);
});
