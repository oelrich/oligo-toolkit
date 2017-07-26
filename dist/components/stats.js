"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gc_content_1 = require("./gc-content");
const meltingpoint = require("./meltingpoint");
const IUPAC = require("./iupac");
const D3 = require("d3");
function stats(stats) {
    if (stats.length > 1) {
        var ext = D3.extent(stats);
        var gc = {
            deviation: D3.deviation(stats),
            ext: { min: ext[0], max: ext[1] },
            mean: D3.mean(stats),
            median: D3.median(stats),
            count: stats.length
        };
        return gc;
    }
    if (stats.length == 1) {
        return { exact: stats[0], count: 1 };
    }
    throw new Error("Stats: Undefined for empty data set.");
}
function next_selection(domain_vars, selection) {
    for (var idx = 0; idx < selection.length; idx++) {
        var next = selection[idx] + 1;
        if (next < domain_vars[idx]) {
            selection[idx] = next;
            break;
        }
        else {
            selection[idx] = 0;
        }
    }
    return selection;
}
function* all_sequences(sequence) {
    var domain = sequence.split("").map((base) => { return IUPAC.expand(base); });
    var domain_vars = domain.map((base) => { return base.length; });
    var domain_size = domain_vars.reduce((sum, value) => { return sum * value; }, 1);
    var sequence_selection = Array(domain_vars.length).fill(0);
    for (var idx = 0; idx < domain_size; idx++) {
        var flat_sequence = sequence_selection.map((selected, idx) => { return domain[idx][selected]; }).join("");
        sequence_selection = next_selection(domain_vars, sequence_selection);
        yield flat_sequence;
    }
}
exports.all_sequences = all_sequences;
function* random_sequences(sequence, sample_size) {
    var domain = sequence.split("").map((base) => { return IUPAC.expand(base); });
    for (var idx = 0; idx < sample_size; idx++) {
        yield domain.map((bases) => { return bases[Math.floor(D3.randomUniform(0, bases.length - 1)())]; }).join("");
    }
}
exports.random_sequences = random_sequences;
function get_stats(generator, tmtype) {
    var data = [];
    for (let flat_sequence of generator) {
        data.push({ gc: gc_content_1.gc_content(flat_sequence), tm: meltingpoint.Tm(flat_sequence, tmtype) });
    }
    return {
        gc: stats(data.map((point) => { return point.gc; })),
        tm: stats(data.map((point) => { return point.tm; }))
    };
}
exports.get_stats = get_stats;
function expanded_size(sequence) {
    return sequence
        .split("")
        .map((base) => { return IUPAC.expand(base).length; })
        .reduce((sum, value) => { return sum * value; }, 1);
}
exports.expanded_size = expanded_size;
//# sourceMappingURL=stats.js.map