import * as transform from "./transform";
import * as IUPAC from "./iupac";
import * as stats from "./stats";
import {TmType} from "./meltingpoint";
import * as D3 from "d3";

export var DEFAULT_SAMPLE_SIZE = 65536;

export {TmType} from "./meltingpoint"

export class otk {
  private _sequence: string;
  private _stats: stats.Stats;
  private _method: string;
  private _domain_size: number;
  private _sample_size: number;
  private _sample_process_time: number;

  private _tm_type:TmType;

  constructor(sequence:string, sample_size:number = DEFAULT_SAMPLE_SIZE, tm_type = TmType.BASIC) {
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
    var sequence_generator : IterableIterator<string>;
    if(this._domain_size > this._sample_size) {
      sequence_generator = stats.random_sequences(this._sequence, sample_size);
      this._method = "random";
    } else {
      sequence_generator = stats.all_sequences(this._sequence);
      this._method = "all";
    }
    this._stats = stats.get_stats(sequence_generator, this._tm_type);
  }

  public size() { return this._domain_size; }

  public time() { return this._sample_process_time; }

  public method() { return this._method; }

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
