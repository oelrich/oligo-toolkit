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
const transform = require("../components/transform");
let SuiteComplement = class SuiteComplement {
    "N should be N"() {
        chai_1.expect(transform.complement('N')).to.equal('N');
    }
    "NAG should be NTC"() {
        chai_1.expect(transform.complement('NAG')).to.equal('NTC');
    }
    "TAC should be ATG"() {
        chai_1.expect(transform.complement('TAC')).to.equal('ATG');
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteComplement.prototype, "N should be N", null);
__decorate([
    mocha_typescript_1.test
], SuiteComplement.prototype, "NAG should be NTC", null);
__decorate([
    mocha_typescript_1.test
], SuiteComplement.prototype, "TAC should be ATG", null);
SuiteComplement = __decorate([
    mocha_typescript_1.suite("Transform (Complement)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteComplement);
let SuiteReverse = class SuiteReverse {
    "N should be N"() {
        chai_1.expect(transform.reverse('N')).to.equal('N');
    }
    "NAG should be GAN"() {
        chai_1.expect(transform.reverse('NAG')).to.equal('GAN');
    }
    "TAC should be CAT"() {
        chai_1.expect(transform.reverse('TAC')).to.equal('CAT');
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteReverse.prototype, "N should be N", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverse.prototype, "NAG should be GAN", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverse.prototype, "TAC should be CAT", null);
SuiteReverse = __decorate([
    mocha_typescript_1.suite("Transform (Reverse)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteReverse);
let SuiteReverseComplement = class SuiteReverseComplement {
    "N should be N"() {
        chai_1.expect(transform.reverse_complement('N')).to.equal('N');
    }
    "ANAAGTA should be TACTTNT"() {
        chai_1.expect(transform.reverse_complement('ANAAGTA')).to.equal('TACTTNT');
    }
    "TAG should be CTA"() {
        chai_1.expect(transform.reverse_complement('TAG')).to.equal('CTA');
    }
    "TAGCATATTAC should be GTAATATGCTA"() {
        chai_1.expect(transform.reverse_complement('TAGCATATTAC')).to.equal('GTAATATGCTA');
    }
    "GATTACA should be TGTAATC"() {
        chai_1.expect(transform.reverse_complement('GATTACA')).to.equal('TGTAATC');
    }
    "TAGCNAABBAATTACGGGVVVTTR should be YAABBBCCCGTAATTVVTTNGCTA"() {
        chai_1.expect(transform.reverse_complement('N')).to.equal('N');
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteReverseComplement.prototype, "N should be N", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverseComplement.prototype, "ANAAGTA should be TACTTNT", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverseComplement.prototype, "TAG should be CTA", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverseComplement.prototype, "TAGCATATTAC should be GTAATATGCTA", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverseComplement.prototype, "GATTACA should be TGTAATC", null);
__decorate([
    mocha_typescript_1.test
], SuiteReverseComplement.prototype, "TAGCNAABBAATTACGGGVVVTTR should be YAABBBCCCGTAATTVVTTNGCTA", null);
SuiteReverseComplement = __decorate([
    mocha_typescript_1.suite("Transform (Reverse complement)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteReverseComplement);
//# sourceMappingURL=transform.js.map