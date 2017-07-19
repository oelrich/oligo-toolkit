import { gc_content as gcr } from "./gc-content";
import * as meltingpoint from "./meltingpoint";
import * as IUPAC from "./iupac";

import * as D3 from "d3";

interface DataPoint {
  gc: number;
  tm: number;
}

export enum StatType { GC, TM }

export interface Stats {
  type: StatType;
  name: string;
  deviation: number;
  mean: number;
  median: number;
}

export function get_stats(sequence: string, sample_size: number): Stats[] {
  return [];
}

export function get_full_stats(sequence: string): Stats[] {
  return [];
}


export function expanded_size(sequence: string) {
  return sequence
    .split("")
    .map((base) => { return IUPAC.expand(base).length; })
    .reduce((sum, value) => { return sum * value; }, 1); 
}

function random_selection(sequence: string, size: number) {
  if(sequence.length < 1) {
    throw new Error("Statistics:random_selection: no sequence");
  }
  var domain = sequence.split("").map((base) => { return IUPAC.expand(base); });

  var selected = D3.set();
  while (selected.size() < size) {
    selected.add(
      domain.map((bases) => {
        if(bases.length == 1) {
          return bases[0];
        }
        return  bases[D3.randomUniform(0, bases.length - 1)()]; }).join()
    );
  }
  return selected;
}
