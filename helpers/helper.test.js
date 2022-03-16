import { format } from '.';
test('format.telephone() shold return empty', () => {
  expect(format.telephone()).toBe('');
});

test('format.telephone("055 99 9 9999 9999") shold return (99) 9 9999-9999', () => {
  expect(format.telephone('055 99 9 9999 9999')).toBe('(99) 9 9999-9999');
});

test('format.telephone("055 99 9999 9999") shold return (99) 9999-9999', () => {
  expect(format.telephone('055 99 9999 9999')).toBe('(99) 9999-9999');
});

test('format.telephone("99 9999 9999") shold return (99) 9999-9999', () => {
  expect(format.telephone('99 9999 9999')).toBe('(99) 9999-9999');
});

test('format.telephone("99999999999") shold return (99) 9 9999-9999', () => {
  expect(format.telephone('99999999999')).toBe('(99) 9 9999-9999');
});

test('format.telephone("9999999999") shold return (99) 9999-9999', () => {
  expect(format.telephone('9999999999')).toBe('(99) 9999-9999');
});

test('format.telephone("055 11 3 1234 1234") shold return empty', () => {
  expect(format.telephone('055 11 3 1234 1234')).toBe('');
});
