import { PI } from './constants.js';

export function add(a, b) { return a + b; }
export function mul(a, b) { return a * b; }

// default export
export default function circleArea(r) {
  return PI * r * r;
}
