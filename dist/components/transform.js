"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IUPAC = require("./iupac");
function reverse_complement(sequence) {
    return sequence.split("").reverse().map(function (base) { return IUPAC.complement(base); }).join("");
}
exports.reverse_complement = reverse_complement;
function reverse(sequence) {
    return sequence.split("").reverse().join("");
}
exports.reverse = reverse;
function complement(sequence) {
    return sequence.split("").map(function (base) { return IUPAC.complement(base); }).join("");
}
exports.complement = complement;
//# sourceMappingURL=transform.js.map