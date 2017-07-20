import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import { otk } from "../components/otk";

@suite("Oligo Toolkit (Misc.)", slow(1000), timeout(2000))
class SuiteMisc {
    @test "Domain Size for ATTAC should be 1"() {
      var o = new otk("ATTAC");
      expect(o.size()).to.equal(1);
    }
    @test "Domain Size for NATTAC should be 4"() {
      var o = new otk("NATTAC");
      expect(o.size()).to.equal(4);
    }
    @test "Domain Size for N{8} should be 4^8"() {
      var o = new otk("NNNNNNNN");
      expect(o.size()).to.equal(Math.pow(4,8));
    }
    @test "Domain Size for N{32} should be 4^32"() {
      var o = new otk("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");
      expect(o.size()).to.equal(Math.pow(4,32));
    }
    @test "Domain Size for N{128} should be 4^128"() {
      var o = new otk("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN");
      expect(o.size()).to.equal(Math.pow(4,128));
    }
}

@suite("Oligo Toolkit (GC)", slow(1000), timeout(2000))
class SuiteGC {
    @test "GC content of ATTAC should be 1/5"() {
      var o = new otk("ATTAC");
      expect(o.stat_gc().exact).to.equal(1/5);
    }
}
