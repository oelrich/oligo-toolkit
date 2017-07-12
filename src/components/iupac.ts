export function valid(sequence:string) {
  return sequence.length == 0 || sequence.match(/[ACGTURYSWKMBDHVN]/g).length == sequence.length;
}
export function complement(base:string) {
  switch (base) {
    case 'A': return 'T';
    case 'C': return 'G';
    case 'G': return 'C';
    case 'T': return 'A';
    case 'U': return 'A';
    case 'R': return 'Y';
    case 'Y': return 'R';
    case 'S': return 'S';
    case 'W': return 'W';
    case 'K': return 'M';
    case 'M': return 'K';
    case 'B': return 'V';
    case 'D': return 'H';
    case 'H': return 'D';
    case 'V': return 'B';
    case 'N': return 'N';
  }
  throw("IUPAC:complement: invalid base");
}
export function expand(base:string) {
  switch (base) {
    case 'A': return ['A'];
    case 'C': return ['C'];
    case 'G': return ['G'];
    case 'T': return ['T'];
    case 'U': return ['T'];
    case 'R': return ['A','G'];
    case 'Y': return ['C','T'];
    case 'S': return ['G','C'];
    case 'W': return ['A','T'];
    case 'K': return ['G','T'];
    case 'M': return ['A','C'];
    case 'B': return ['C','G','T'];
    case 'D': return ['A','G','T'];
    case 'H': return ['A','C','T'];
    case 'V': return ['A','C','G'];
    case 'N': return ['A','C','G','T'];
  }
  throw new Error("IUPAC:expand: invalid base");
}
