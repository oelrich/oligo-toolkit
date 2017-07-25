import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import * as stats from "../components/stats";

@suite("Statistics (Domain size)", slow(1000), timeout(2000))
class SuiteDomainSize {
    @test "TAN expands to 4 sequences"() {
      expect(stats.expanded_size("TAN")).to.equal(4);
    }
    @test "VAN expands to 12 sequences"() {
      expect(stats.expanded_size("VAN")).to.equal(12);
    }
    @test "N expands to 4 sequences"() {
      expect(stats.expanded_size("N")).to.equal(4);
    }
    @test "NNNNNNNN expands to 65 536 sequences"() {
      expect(stats.expanded_size("NNNNNNNN")).to.equal(65536);
    }
    @test "N{128} expands to 4^128 sequences"() {
      expect(stats.expanded_size("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN")).to.equal(Math.pow(4,128));
    }
}
@suite("Statistics (Expansion)", slow(1000), timeout(2000))
class SuiteSequenceExpansion {
    @test "TAN expands to 4 sequences"() {
      var gen = stats.all_sequences("TAN");
      var count = 0;
      for (let flat_sequence of gen) {
        expect(['TAA','TAT','TAG','TAC'].some((x) => x == flat_sequence)).to.be.true;
        count++;
      }
      expect(count).to.equal(4);
    }
    @test "TAN expands to 8 random sequences"() {
      var gen = stats.random_sequences("TAN", 8);
      var count = 0;
      for (let flat_sequence of gen) {
        expect(['TAA','TAT','TAG','TAC'].some((x) => x == flat_sequence)).to.be.true;
        count++;
      }
      expect(count).to.equal(8);
    }
    @test "NAN expands to 16 random sequences"() {
      var gen = stats.random_sequences("NAN", 16);
      var count = 0;
      for (let flat_sequence of gen) {
        expect(['AAA','AAT','AAG','AAC',
                'TAA','TAT','TAG','TAC',
                'GAA','GAT','GAG','GAC',
                'CAA','CAT','CAG','CAC'].some((x) => x == flat_sequence)).to.be.true;
        count++;
      }
      expect(count).to.equal(16);
    }
}
