export function basic(sequence: string) {
  var A = (sequence.match(/[A]/g) || []).length;
  var T = (sequence.match(/[T]/g) || []).length;
  var G = (sequence.match(/[G]/g) || []).length;
  var C = (sequence.match(/[C]/g) || []).length;
  if((A+T+G+C) != sequence.length) {
    throw new Error("Tm:Basic - Bad sequence");
  }
  var Tm = NaN;
  if(sequence.length < 14 && sequence.length > 0) {
    Tm = (A + T) * 2 + (G + C) * 4;
  } else {
    Tm = 64.9 + 41 * (G + C - 16.4)/(A + T + G + C);
  }
  return Tm;
};

export function nn(sequence: string) {
  if(sequence.length == 0) {
    throw new Error("Tm:NN - Bad sequence");
  }
  return 0.0;
}