import * as IUPAC from "./iupac";

export function expanded_size(sequence: string) {
  return sequence
    .split("")
    .map((base) => { return IUPAC.expand(base).length; })
    .reduce((sum, value) => { return sum * value; }, 1); 
}