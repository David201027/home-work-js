// реэкспорт именованных
export { add, mul } from '../math.js';

// реэкспорт default как именованный
export { default as circleArea } from '../math.js';

// namespace-реэкспорт
export * as constants from '../constants.js';

// реэкспорт default + переименование именованного
export { default as greet, exclaim as shout } from '../greeter.js';
