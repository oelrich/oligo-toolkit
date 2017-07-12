export function gc_content(sequence: string) {  
  if(sequence.length == 0 || sequence.match(/[ATGC]/g).length != sequence.length) {
    throw Error("GC-content calculation requires string to be [ATGC]+");
  }
  
  return (sequence.match(/[GC]/g) ||[]).length / sequence.length;
}