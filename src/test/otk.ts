import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import { otk } from "../components/otk";

@suite("Oligo Toolkit (Misc.)", slow(1000), timeout(2000))
class SuiteMisc {
    @test "Domain Size for ATTAC should be 1"() {
      var o = new otk("ATTAC");
      expect(o.size()).to.equal(1);
    }
    @test "Domain Size for NATTAC"() {
      var o = new otk("NATTAC");
      expect(o.size()).to.equal(4);
    }
}

@suite("Oligo Toolkit (GC)", slow(1000), timeout(2000))
class SuiteGC {
    @test "GC content of ATTAC should be 1/5"() {
      var o = new otk("ATTAC");
      expect(o.stat_gc().exact).to.equal(1/5);
    }
}
