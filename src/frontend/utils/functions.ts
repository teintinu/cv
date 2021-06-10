
export function getKeys<T extends {}>(o: T): Array<keyof T> {
  return <Array<keyof T>>Object.keys(o)
}
