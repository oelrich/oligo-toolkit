"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gc_content(sequence) {
    if (sequence.length == 0 || sequence.match(/[ATGC]/g).length != sequence.length) {
        throw Error("GC-content calculation requires string to be [ATGC]+");
    }
    return (sequence.match(/[GC]/g) || []).length / sequence.length;
}
exports.gc_content = gc_content;
//# sourceMappingURL=gc-content.js.map