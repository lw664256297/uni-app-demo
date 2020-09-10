/**
 * Create an object with values equal to its key names.
 */

export default function<T>(obj: T): { [K in keyof T]: string } {
  const ret: any = {};
  let key;

  for (key in obj) {
    // tslint:disable-next-line:ban-types
    if ((obj as Object).hasOwnProperty(key)) {
      ret[key] = key;
    }
  }

  return ret as { [K in keyof T]: string };
}
