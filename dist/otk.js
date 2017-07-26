/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function valid(sequence) {
    return sequence.length == 0 || sequence.match(/[ACGTURYSWKMBDHVN]/g).length == sequence.length;
}
exports.valid = valid;
function complement(base) {
    switch (base) {
        case 'A': return 'T';
        case 'C': return 'G';
        case 'G': return 'C';
        case 'T': return 'A';
        case 'U': return 'A';
        case 'R': return 'Y';
        case 'Y': return 'R';
        case 'S': return 'S';
        case 'W': return 'W';
        case 'K': return 'M';
        case 'M': return 'K';
        case 'B': return 'V';
        case 'D': return 'H';
        case 'H': return 'D';
        case 'V': return 'B';
        case 'N': return 'N';
    }
    throw ("IUPAC:complement: invalid base");
}
exports.complement = complement;
function expand(base) {
    switch (base) {
        case 'A': return ['A'];
        case 'C': return ['C'];
        case 'G': return ['G'];
        case 'T': return ['T'];
        case 'U': return ['T'];
        case 'R': return ['A', 'G'];
        case 'Y': return ['C', 'T'];
        case 'S': return ['G', 'C'];
        case 'W': return ['A', 'T'];
        case 'K': return ['G', 'T'];
        case 'M': return ['A', 'C'];
        case 'B': return ['C', 'G', 'T'];
        case 'D': return ['A', 'G', 'T'];
        case 'H': return ['A', 'C', 'T'];
        case 'V': return ['A', 'C', 'G'];
        case 'N': return ['A', 'C', 'G', 'T'];
    }
    throw new Error("IUPAC:expand: invalid base");
}
exports.expand = expand;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TmType;
(function (TmType) {
    TmType[TmType["BASIC"] = 0] = "BASIC";
    TmType[TmType["NN"] = 1] = "NN";
})(TmType = exports.TmType || (exports.TmType = {}));
function Tm(sequence, type) {
    switch (type) {
        case TmType.BASIC:
            return basic(sequence);
        case TmType.NN:
            return nn(sequence);
        default:
            break;
    }
    throw new Error("No such TmType.");
}
exports.Tm = Tm;
function basic(sequence) {
    var A = (sequence.match(/[A]/g) || []).length;
    var T = (sequence.match(/[T]/g) || []).length;
    var G = (sequence.match(/[G]/g) || []).length;
    var C = (sequence.match(/[C]/g) || []).length;
    if ((A + T + G + C) != sequence.length) {
        throw new Error("Tm:Basic - Bad sequence");
    }
    var Tm = NaN;
    if (sequence.length < 14 && sequence.length > 0) {
        Tm = (A + T) * 2 + (G + C) * 4;
    }
    else {
        Tm = 64.9 + 41 * (G + C - 16.4) / (A + T + G + C);
    }
    return Tm;
}
;
function nn(sequence) {
    if (sequence.length == 0) {
        throw new Error("Tm:NN - Bad sequence");
    }
    return 0.0;
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = D3;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const transform = __webpack_require__(4);
const IUPAC = __webpack_require__(0);
const stats = __webpack_require__(5);
const meltingpoint_1 = __webpack_require__(1);
const D3 = __webpack_require__(2);
exports.DEFAULT_SAMPLE_SIZE = 65536;
var meltingpoint_2 = __webpack_require__(1);
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const IUPAC = __webpack_require__(0);
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const gc_content_1 = __webpack_require__(6);
const meltingpoint = __webpack_require__(1);
const IUPAC = __webpack_require__(0);
const D3 = __webpack_require__(2);
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function gc_content(sequence) {
    if (sequence.length == 0 || sequence.match(/[ATGC]/g).length != sequence.length) {
        throw Error("GC-content calculation requires string to be [ATGC]+");
    }
    return (sequence.match(/[GC]/g) || []).length / sequence.length;
}
exports.gc_content = gc_content;


/***/ })
/******/ ]);
//# sourceMappingURL=otk.js.map