import {Operations} from './types';

export function calculateAnswer(
  inp1: number,
  operation: Operations,
  inp2: number,
): number {
  if (operation === Operations.Add) {
    return inp1 + inp2;
  } else if (operation === Operations.Subtract) {
    return inp1 - inp2;
  } else if (operation === Operations.Multiply) {
    return inp1 * inp2;
  } else if (operation === Operations.Divide) {
    return inp1 / inp2;
  }

  return NaN;
}
