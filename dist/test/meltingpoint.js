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
const mp = require("../components/meltingpoint");
let SuiteBasic = class SuiteBasic {
    "CATATTAC should be about 20.0 °C"() {
        chai_1.expect(mp.Tm('CATATTAC', mp.TmType.BASIC)).to.be.approximately(20.0, 0.1);
    }
    "CATATTACGGAATAGTCA should be about 41.2 °C"() {
        chai_1.expect(mp.Tm('CATATTACGGAATAGTCA', mp.TmType.BASIC)).to.approximately(41.2, 0.1);
    }
    "CATAGTAATAGTCATTACG should be about 42.5 °C"() {
        chai_1.expect(mp.Tm('CATAGTAATAGTCATTACG', mp.TmType.BASIC)).to.approximately(42.5, 0.1);
    }
    "TAGTCA should be about 16.0 °C"() {
        chai_1.expect(mp.Tm('TAGTCA', mp.TmType.BASIC)).to.approximately(16.0, 0.1);
    }
    "TAGCAT should be about 16.0 °C"() {
        chai_1.expect(mp.Tm('TAGCAT', mp.TmType.BASIC)).to.approximately(16.0, 0.1);
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteBasic.prototype, "CATATTAC should be about 20.0 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteBasic.prototype, "CATATTACGGAATAGTCA should be about 41.2 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteBasic.prototype, "CATAGTAATAGTCATTACG should be about 42.5 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteBasic.prototype, "TAGTCA should be about 16.0 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteBasic.prototype, "TAGCAT should be about 16.0 \u00B0C", null);
SuiteBasic = __decorate([
    mocha_typescript_1.suite("Meltingpoint (Basic)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteBasic);
let SuiteNN = class SuiteNN {
    "CATATTAC (200 nM, 50 mM, 0 mM) should be about -0.8 °C"() {
        chai_1.expect(mp.Tm('CATATTAC', mp.TmType.NN)).to.approximately(-0.8, 0.1);
    }
    "CATATTACGGAATAGTCA (200 nM, 50 mM, 0 mM) should be about 42.7 °C"() {
        chai_1.expect(mp.Tm('CATATTACGGAATAGTCA', mp.TmType.NN)).to.approximately(42.7, 0.1);
    }
    "CATAGTAATAGTCATTACG (200 nM, 50 mM, 0 mM) should be about 42.1 °C"() {
        chai_1.expect(mp.Tm('CATAGTAATAGTCATTACG', mp.TmType.NN)).to.approximately(42.1, 0.1);
    }
    "TAGTCA (200 nM, 50 mM, 0 mM) should be about -17.6 °C"() {
        chai_1.expect(mp.Tm('TAGTCA', mp.TmType.NN)).to.approximately(-17.6, 0.1);
    }
    "TAGCAT (200 nM, 50 mM, 0 mM) should be about -15.1 °C"() {
        chai_1.expect(mp.Tm('TAGCAT', mp.TmType.NN)).to.approximately(-15.1, 0.1);
    }
};
__decorate([
    mocha_typescript_1.test
], SuiteNN.prototype, "CATATTAC (200 nM, 50 mM, 0 mM) should be about -0.8 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteNN.prototype, "CATATTACGGAATAGTCA (200 nM, 50 mM, 0 mM) should be about 42.7 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteNN.prototype, "CATAGTAATAGTCATTACG (200 nM, 50 mM, 0 mM) should be about 42.1 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteNN.prototype, "TAGTCA (200 nM, 50 mM, 0 mM) should be about -17.6 \u00B0C", null);
__decorate([
    mocha_typescript_1.test
], SuiteNN.prototype, "TAGCAT (200 nM, 50 mM, 0 mM) should be about -15.1 \u00B0C", null);
SuiteNN = __decorate([
    mocha_typescript_1.suite.skip("Meltingpoint (NN)", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], SuiteNN);
//# sourceMappingURL=meltingpoint.js.map