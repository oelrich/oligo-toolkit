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
const IUPAC = require("../components/iupac");
let SuiteComplement = class SuiteComplement {
    "N should be N"() {
        chai_1.expect(IUPAC.complement('N')).to.equal('N');
    }
    "B should be V"() {
        chai_1.expect(IUPAC.complement('B')).to.equal('V');
    }
    "R should be Y"() {
        chai_1.expect(IUPAC.complement('R')).to.equal('Y');
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteComplement.prototype, "N should be N", null);
__decorate([
    mocha_typescript_1.test
], SuiteComplement.prototype, "B should be V", null);
__decorate([
    mocha_typescript_1.test
], SuiteComplement.prototype, "R should be Y", null);
SuiteComplement = __decorate([
    mocha_typescript_1.suite("IUPAC (Complement)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteComplement);
let SuiteExpand = class SuiteExpand {
    "N should contain only A, C, G & T"() {
        chai_1.expect(IUPAC.expand('N')).to.include('A');
        chai_1.expect(IUPAC.expand('N')).to.include('T');
        chai_1.expect(IUPAC.expand('N')).to.include('G');
        chai_1.expect(IUPAC.expand('N')).to.include('C');
        chai_1.assert.equal(IUPAC.expand('N').length, 4);
    }
    "5 should trow"() {
        chai_1.expect(() => { IUPAC.expand('5'); }).to.throw("IUPAC:expand: invalid base");
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteExpand.prototype, "N should contain only A, C, G & T", null);
__decorate([
    mocha_typescript_1.test
], SuiteExpand.prototype, "5 should trow", null);
SuiteExpand = __decorate([
    mocha_typescript_1.suite("IUPAC (Expand)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteExpand);
//# sourceMappingURL=iupac.js.map