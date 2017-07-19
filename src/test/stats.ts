import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import * as statistics from "../components/stats";

@suite("Statistics - Expansion", slow(1000), timeout(2000))
class SuiteExpansionSize {
    @test "TAN expands to 4 sequences"() {
      expect(statistics.expanded_size("TAN")).to.equal(4);
    }
    @test "VAN expands to 12 sequences"() {
      expect(statistics.expanded_size("VAN")).to.equal(12);
    }
    @test "N expands to 4 sequences"() {
      expect(statistics.expanded_size("N")).to.equal(4);
    }
    @test "NNNNNNNN expands to 65 536 sequences"() {
      expect(statistics.expanded_size("NNNNNNNN")).to.equal(65536);
    }
}