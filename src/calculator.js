// @ts-check
import readlineSync from 'readline-sync';

const calculator = {
  a: null,
  b: null,
  read() {
    this.a = Number(readlineSync.question('Enter number A: '));
    this.b = Number(readlineSync.question('Enter number B: '));
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

export default calculator;
