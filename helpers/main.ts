export default function optimizeProp(name?: string, style?: string) {
  return `${style}-${name}`;
}
