import { gc_content as gcr } from "./gc-content";
import * as transform from "./transform";

export class otk {
  private _sequence: string;
  private _expanded_sequence: string;
  private _gc_stats: string;
  
  constructor(sequence: string) {
    this._sequence = sequence;
  }

  public sequence(sequence: string | null) {
    if(sequence == null) {
      return this._sequence;
    } else {
      this._sequence = sequence;
    }
  }

  public gc_content() {
    return gcr(this._sequence);
  }

  public reverse_complement() {
    return transform.reverse_complement(this._sequence);
  }

}