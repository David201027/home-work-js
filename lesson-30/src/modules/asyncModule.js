// default + именованный экспорт в лениво загружаемом модуле
export default function lazySquare(n) {
  return n * n;
}

export const timestamp = () => new Date().toISOString();
