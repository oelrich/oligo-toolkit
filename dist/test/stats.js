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
const stats = require("../components/stats");
let SuiteDomainSize = class SuiteDomainSize {
    "TAN expands to 4 sequences"() {
        chai_1.expect(stats.expanded_size("TAN")).to.equal(4);
    }
    "VAN expands to 12 sequences"() {
        chai_1.expect(stats.expanded_size("VAN")).to.equal(12);
    }
    "N expands to 4 sequences"() {
        chai_1.expect(stats.expanded_size("N")).to.equal(4);
    }
    "NNNNNNNN expands to 65 536 sequences"() {
        chai_1.expect(stats.expanded_size("NNNNNNNN")).to.equal(65536);
    }
    "N{128} expands to 4^128 sequences"() {
        chai_1.expect(stats.expanded_size("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")).to.equal(Math.pow(4, 128));
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteDomainSize.prototype, "TAN expands to 4 sequences", null);
__decorate([
    mocha_typescript_1.test
], SuiteDomainSize.prototype, "VAN expands to 12 sequences", null);
__decorate([
    mocha_typescript_1.test
], SuiteDomainSize.prototype, "N expands to 4 sequences", null);
__decorate([
    mocha_typescript_1.test
], SuiteDomainSize.prototype, "NNNNNNNN expands to 65 536 sequences", null);
__decorate([
    mocha_typescript_1.test
], SuiteDomainSize.prototype, "N{128} expands to 4^128 sequences", null);
SuiteDomainSize = __decorate([
    mocha_typescript_1.suite("Statistics (Domain size)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteDomainSize);
let SuiteSequenceExpansion = class SuiteSequenceExpansion {
    "TAN expands to 4 sequences"() {
        var gen = stats.all_sequences("TAN");
        var count = 0;
        for (let flat_sequence of gen) {
            chai_1.expect(['TAA', 'TAT', 'TAG', 'TAC'].some((x) => x == flat_sequence)).to.be.true;
            count++;
        }
        chai_1.expect(count).to.equal(4);
    }
    "TAN expands to 8 random sequences"() {
        var gen = stats.random_sequences("TAN", 8);
        var count = 0;
        for (let flat_sequence of gen) {
            chai_1.expect(['TAA', 'TAT', 'TAG', 'TAC'].some((x) => x == flat_sequence)).to.be.true;
            count++;
        }
        chai_1.expect(count).to.equal(8);
    }
    "NAN expands to 16 random sequences"() {
        var gen = stats.random_sequences("NAN", 16);
        var count = 0;
        for (let flat_sequence of gen) {
            chai_1.expect(['AAA', 'AAT', 'AAG', 'AAC',
                'TAA', 'TAT', 'TAG', 'TAC',
                'GAA', 'GAT', 'GAG', 'GAC',
                'CAA', 'CAT', 'CAG', 'CAC'].some((x) => x == flat_sequence)).to.be.true;
            count++;
        }
        chai_1.expect(count).to.equal(16);
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteSequenceExpansion.prototype, "TAN expands to 4 sequences", null);
__decorate([
    mocha_typescript_1.test
], SuiteSequenceExpansion.prototype, "TAN expands to 8 random sequences", null);
__decorate([
    mocha_typescript_1.test
], SuiteSequenceExpansion.prototype, "NAN expands to 16 random sequences", null);
SuiteSequenceExpansion = __decorate([
    mocha_typescript_1.suite("Statistics (Expansion)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteSequenceExpansion);
//# sourceMappingURL=stats.js.map