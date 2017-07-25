import { gc_content as gcr } from "./gc-content";
import * as meltingpoint from "./meltingpoint";
import * as IUPAC from "./iupac";
import * as D3 from "d3";

interface DataPoint {
  gc: number;
  tm: number;
}

export interface Stats {
  gc:Statistics;
  tm:Statistics;
}

export interface Statistics {
  deviation?: number;
  mean?: number;
  median?: number;
  ext?: { min: number, max: number};
  count: number;
  exact?:number;
}

function stats(stats:number[]) : Statistics {
  if(stats.length > 1) {
    var ext = D3.extent(stats);
    var gc: Statistics = {
      deviation: D3.deviation(stats),
      ext: {min: ext[0], max: ext[1]},
      mean: D3.mean(stats),
      median: D3.median(stats),
      count: stats.length
    };
    return gc;
  }
  if(stats.length == 1) {
    return { exact: stats[0] , count: 1 };
  }
  throw new Error("Stats: Undefined for empty data set.")
}

function next_selection(domain_vars: number[], selection: number[]) : number[] {
  for (var idx = 0; idx < selection.length; idx++) {
    var next = selection[idx] + 1;
    if(next < domain_vars[idx]) {
      selection[idx] = next;
      break;
    } else {
      selection[idx] = 0;
    }
  }
  return selection;
}

export function* all_sequences(sequence: string) {
  var domain = sequence.split("").map((base) => { return IUPAC.expand(base); });
  var domain_vars = domain.map((base) => { return base.length; });
  var domain_size = domain_vars.reduce((sum, value) => { return sum * value; }, 1);
  var sequence_selection = Array(domain_vars.length).fill(0);
  for (var idx = 0; idx < domain_size; idx++) {
    var flat_sequence = sequence_selection.map((selected,idx) => { return domain[idx][selected]; }).join("");
    sequence_selection = next_selection(domain_vars, sequence_selection);
    yield flat_sequence;
  }
}

export function* random_sequences(sequence: string, sample_size: number) {
  var domain = sequence.split("").map((base) => { return IUPAC.expand(base); });
  for (var idx = 0; idx < sample_size; idx++) {
    yield domain.map((bases) => { return bases[Math.floor(D3.randomUniform(0, bases.length - 1)())]; }).join("");
  }
}

export function get_stats(generator:IterableIterator<string>, tmtype: meltingpoint.TmType) : Stats {
  var data: DataPoint[] = [];
  for (let flat_sequence of generator) {
    data.push({gc:gcr(flat_sequence), tm:meltingpoint.Tm(flat_sequence, tmtype)});
  }
  return {
    gc:stats(data.map((point) => { return point.gc; })),
    tm: stats(data.map((point) => { return point.tm; }))};
}

export function expanded_size(sequence: string) {
  return sequence
    .split("")
    .map((base) => { return IUPAC.expand(base).length; })
    .reduce((sum, value) => { return sum * value; }, 1); 
}
