import * as transform from "./transform";
import * as IUPAC from "./iupac";
import * as stats from "./stats";
import * as meltingpoint from "./meltingpoint";
import * as D3 from "d3";

export var DEFAULT_SAMPLE_SIZE = 65536;

export class otk {
  private _sequence: string;
  private _stats: stats.Stats;

  private _domain_size: number;
  private _sample_size: number;
  private _sample_process_time: number;

  private _tm_type:meltingpoint.TmType;

  constructor(sequence:string, sample_size:number = DEFAULT_SAMPLE_SIZE, tm_type = meltingpoint.TmType.BASIC) {
    if(!IUPAC.valid(sequence)) {
      throw new Error("OTK: Invalid sequence");
    }
    this._tm_type = tm_type;
    this._sequence = sequence;
    this._sample_size = sample_size;
    this._domain_size = stats.expanded_size(sequence);
    var start = D3.now();
    this.populate_stats();
    this._sample_process_time = D3.now() - start;
  }

  private populate_stats(sample_size:number = this._sample_size) {
    if(this._domain_size == 1) {
      this._stats = stats.get_single_stats(this._sequence, this._tm_type);
    } else if(this._domain_size > this._sample_size) {
      this._stats = stats.get_stats(this._sequence, this._sample_size, this._tm_type);
    } else {
      this._stats = stats.get_full_stats(this._sequence, this._tm_type);
    }
  }

  public size() { return this._domain_size; }

  public time() { return this._sample_process_time; }

  public sequence(sequence: string | null) {
    if(sequence == null) {
      return this._sequence;
    } else {
      this._sequence = sequence;
    }
  }

  public stat_gc() {
    return this._stats.gc;
  }

  public stat_tm() {
    return this._stats.tm;
  }

  public reverse_complement() {
    return transform.reverse_complement(this._sequence);
  }

}
