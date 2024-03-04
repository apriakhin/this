// @ts-check
import readlineSync from 'readline-sync';

const calculator = {
  a: null,
  b: null,
  read() {
    this.a = readlineSync.questionInt('Enter number A: ');
    this.b = readlineSync.questionInt('Enter number B: ');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

export default calculator;
