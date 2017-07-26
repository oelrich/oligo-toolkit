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
const gc_content_1 = require("../components/gc-content");
let Suite = class Suite {
    "GC for ATTA should be 0"() {
        chai_1.assert.equal(gc_content_1.gc_content('ATTA'), 0);
    }
    "GC for CATATTAC should be 0.25"() {
        chai_1.assert.equal(gc_content_1.gc_content('CATATTAC'), 0.25);
    }
    "Empty string should throw"() {
        chai_1.expect(() => { gc_content_1.gc_content(''); }).to.throw("GC-content calculation requires string to be [ATGC]+");
    }
    "Characters outside of [ATGC]+"() {
        chai_1.expect(() => { gc_content_1.gc_content('A5TAC'); }).to.throw("GC-content calculation requires string to be [ATGC]+");
    }
};
__decorate([
    mocha_typescript_1.test
], Suite.prototype, "GC for ATTA should be 0", null);
__decorate([
    mocha_typescript_1.test
], Suite.prototype, "GC for CATATTAC should be 0.25", null);
__decorate([
    mocha_typescript_1.test
], Suite.prototype, "Empty string should throw", null);
__decorate([
    mocha_typescript_1.test
], Suite.prototype, "Characters outside of [ATGC]+", null);
Suite = __decorate([
    mocha_typescript_1.suite("GC-content", mocha_typescript_1.slow(1000), mocha_typescript_1.timeout(2000))
], Suite);
//# sourceMappingURL=gc-content.js.map