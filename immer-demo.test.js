import produce, { freeze } from 'immer';

test('immer', () => {
  // This is a source object. We don't want to change it in-place, so
  // we freeze it right away.
  const oli = freeze({ name: 'Oli', age: 23 });

  // If we change the object directly, the change doesn't stick.
  oli.age = 64;
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
});
