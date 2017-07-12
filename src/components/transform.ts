import * as IUPAC from "./iupac";

export function reverse_complement(sequence:string) {
  return sequence.split("").reverse().map(function(base) { return IUPAC.complement(base); }).join(""); 
}
export function reverse(sequence:string) {
  return sequence.split("").reverse().join("");
}
export function complement(sequence:string) {
  return sequence.split("").map(function(base) { return IUPAC.complement(base); }).join("");
}