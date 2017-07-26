"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_typescript_1 = require("mocha-typescript");
const chai_1 = require("chai");
const oligo_toolkit_1 = require("../oligo-toolkit");
let SuiteMisc = class SuiteMisc {
    "Domain Size for ATTAC should be 1"() {
        var o = new oligo_toolkit_1.otk("ATTAC");
        chai_1.expect(o.size()).to.equal(1);
    }
    "Domain Size for NATTAC should be 4"() {
        var o = new oligo_toolkit_1.otk("NATTAC");
        chai_1.expect(o.size()).to.equal(4);
    }
    "Domain Size for N{8} should be 4^8"() {
        var o = new oligo_toolkit_1.otk("NNNNNNNN");
        chai_1.expect(o.size()).to.equal(Math.pow(4, 8));
    }
    "Domain Size for N{9} should be 4^9"() {
        var o = new oligo_toolkit_1.otk("NNNNNNNNN", Math.pow(4, 9));
        console.log("GC");
        console.log(o.stat_gc());
        console.log("Tm");
        console.log(o.stat_tm());
        chai_1.expect(o.size()).to.equal(Math.pow(4, 9));
    }
    "Domain Size for N{32} should be 4^32"() {
        var o = new oligo_toolkit_1.otk("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN", Math.pow(4, 32));
        chai_1.expect(o.size()).to.equal(Math.pow(4, 32));
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteMisc.prototype, "Domain Size for ATTAC should be 1", null);
__decorate([
    mocha_typescript_1.test
], SuiteMisc.prototype, "Domain Size for NATTAC should be 4", null);
__decorate([
    mocha_typescript_1.test
], SuiteMisc.prototype, "Domain Size for N{8} should be 4^8", null);
__decorate([
    mocha_typescript_1.test.skip
], SuiteMisc.prototype, "Domain Size for N{9} should be 4^9", null);
__decorate([
    mocha_typescript_1.test.skip
], SuiteMisc.prototype, "Domain Size for N{32} should be 4^32", null);
SuiteMisc = __decorate([
    mocha_typescript_1.suite("Oligo Toolkit (Misc.)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(5000))
], SuiteMisc);
let SuiteGC = class SuiteGC {
    "GC content of ATTAC should be 1/5"() {
        var o = new oligo_toolkit_1.otk("ATTAC");
        chai_1.expect(o.stat_gc().exact).to.equal(1 / 5);
    }
    "GC content of ATTAN should be max 1/5, min 0 and average 1/10"() {
        var o = new oligo_toolkit_1.otk("ATTAN");
        chai_1.expect(o.stat_gc().ext.min).to.equal(0);
        chai_1.expect(o.stat_gc().ext.max).to.equal(1 / 5);
        chai_1.expect(o.stat_gc().mean).to.equal(1 / 10);
        chai_1.expect(o.stat_gc().count).to.equal(4);
    }
    "GC content of ATTNN should be max 2/5, min 0 and average 1/5"() {
        var o = new oligo_toolkit_1.otk("ATTNN");
        chai_1.expect(o.stat_gc().ext.min).to.equal(0);
        chai_1.expect(o.stat_gc().ext.max).to.equal(2 / 5);
        chai_1.expect(o.stat_gc().mean).to.equal(1 / 5);
        chai_1.expect(o.stat_gc().count).to.equal(16);
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteGC.prototype, "GC content of ATTAC should be 1/5", null);
__decorate([
    mocha_typescript_1.test
], SuiteGC.prototype, "GC content of ATTAN should be max 1/5, min 0 and average 1/10", null);
__decorate([
    mocha_typescript_1.test
], SuiteGC.prototype, "GC content of ATTNN should be max 2/5, min 0 and average 1/5", null);
SuiteGC = __decorate([
    mocha_typescript_1.suite("Oligo Toolkit (GC)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteGC);
let SuiteTm = class SuiteTm {
    "CATATTAC should be about 20.0 °C"() {
        var o = new oligo_toolkit_1.otk("CATATTAC");
        chai_1.expect(o.stat_tm().exact).to.be.approximately(20.0, 0.1);
    }
    "CATATTAN should be about  20.0 °C"() {
        var o = new oligo_toolkit_1.otk("CATATTAN");
        chai_1.expect(o.stat_tm().count).to.equal(4);
        chai_1.expect(o.stat_tm().mean).to.equal(19);
        chai_1.expect(o.stat_tm().ext.min).to.equal(18);
        chai_1.expect(o.stat_tm().ext.max).to.equal(20);
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteTm.prototype, "CATATTAC should be about 20.0 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteTm.prototype, "CATATTAN should be about  20.0 \u00B0C", null);
SuiteTm = __decorate([
    mocha_typescript_1.suite("Oligo Toolkit (Tm)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteTm);
let SuiteTransforms = class SuiteTransforms {
    "CATATTAC reverse complement should be GTAATATG"() {
        var o = new oligo_toolkit_1.otk("CATATTAC");
        chai_1.expect(o.reverse_complement()).to.equal("GTAATATG");
    }
    "CATATTAN reverse complement should be NTAATATG"() {
        var o = new oligo_toolkit_1.otk("CATATTAN");
        chai_1.expect(o.reverse_complement()).to.equal("NTAATATG");
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteTransforms.prototype, "CATATTAC reverse complement should be GTAATATG", null);
__decorate([
    mocha_typescript_1.test
], SuiteTransforms.prototype, "CATATTAN reverse complement should be NTAATATG", null);
SuiteTransforms = __decorate([
    mocha_typescript_1.suite("Oligo Toolkit (Transforms)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteTransforms);
//# sourceMappingURL=oligo-toolkit.js.map