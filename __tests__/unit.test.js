// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('true phone number # 1', () => {
  expect(isPhoneNumber('(408) 123-4567')).toBe(true);
});

test('true phone number # 2', () => {
  expect(isPhoneNumber('987-654-3210')).toBe(true);
});

test('false phone number # 1', () => {
  expect(isPhoneNumber('123.456.7890')).toBe(false);
});

test('false phone number # 1', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('true email # 1', () => {
  expect(isEmail('hello@gmail.com')).toBe(true);
});

test('true email # 2', () => {
  expect(isEmail('A_B@yahoo.co')).toBe(true);
});

test('false email # 1', () => {
  expect(isEmail('john.doe@gmail.com')).toBe(false);
});

test('false email # 2', () => {
  expect(isEmail('yc@yc.startup')).toBe(false);
});

test('true password # 1', () => {
  expect(isStrongPassword('sahil123')).toBe(true);
});

test('true password # 2', () => {
  expect(isStrongPassword('abc_d')).toBe(true);
});

test('false password # 1', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('false password # 2', () => {
  expect(isStrongPassword('ME!!!')).toBe(false);
});

test('true date # 1', () => {
  expect(isDate('12/12/1212')).toBe(true);
});

test('true date # 2', () => {
  expect(isDate('99/99/2026')).toBe(true);
});

test('false date # 1', () => {
  expect(isDate('5/2/26')).toBe(false);
});

test('false date # 2', () => {
  expect(isDate('1-1-2026')).toBe(false);
});

test('true color # 1', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('true color # 2', () => {
  expect(isHexColor('000000')).toBe(true);
});

test('false color # 1', () => {
  expect(isHexColor('GGGGGG')).toBe(false);
});

test('false color # 2', () => {
  expect(isHexColor('# FFF')).toBe(false);
});