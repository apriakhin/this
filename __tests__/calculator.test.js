// @ts-check

import { test, expect, jest } from '@jest/globals';
import readlineSync from 'readline-sync';
import calculator from '../index.js';

test('calculator', () => {
  readlineSync.questionInt = jest.fn((question) => {
    if (question === 'Enter number A: ') {
      return 3;
    }
    return 4;
  });

  calculator.read();
  expect(calculator.sum()).toBe(7);
  expect(calculator.mul()).toBe(12);
});
