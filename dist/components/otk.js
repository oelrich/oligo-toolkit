"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const transform = require("./transform");
const IUPAC = require("./iupac");
const stats = require("./stats");
const meltingpoint_1 = require("./meltingpoint");
const D3 = require("d3");
exports.DEFAULT_SAMPLE_SIZE = 65536;
var meltingpoint_2 = require("./meltingpoint");
exports.TmType = meltingpoint_2.TmType;
class otk {
    constructor(sequence, sample_size = exports.DEFAULT_SAMPLE_SIZE, tm_type = meltingpoint_1.TmType.BASIC) {
        if (!IUPAC.valid(sequence)) {
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
    populate_stats(sample_size = this._sample_size) {
        var sequence_generator;
        if (this._domain_size > this._sample_size) {
            sequence_generator = stats.random_sequences(this._sequence, sample_size);
            this._method = "random";
        }
        else {
            sequence_generator = stats.all_sequences(this._sequence);
            this._method = "all";
        }
        this._stats = stats.get_stats(sequence_generator, this._tm_type);
    }
    size() { return this._domain_size; }
    time() { return this._sample_process_time; }
    method() { return this._method; }
    sequence(sequence) {
        if (sequence == null) {
            return this._sequence;
        }
        else {
            this._sequence = sequence;
        }
    }
    stat_gc() {
        return this._stats.gc;
    }
    stat_tm() {
        return this._stats.tm;
    }
    reverse_complement() {
        return transform.reverse_complement(this._sequence);
    }
}
exports.otk = otk;
//# sourceMappingURL=otk.js.map