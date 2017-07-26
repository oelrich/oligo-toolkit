import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import { otk } from "../oligo-toolkit";

@suite("Oligo Toolkit (Misc.)", slow(1000), timeout(5000))
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
    @test.skip "Domain Size for N{9} should be 4^9"() {
      var o = new otk("NNNNNNNNN",Math.pow(4,9));
      console.log("GC");
      console.log(o.stat_gc());
      console.log("Tm");
      console.log(o.stat_tm());
      expect(o.size()).to.equal(Math.pow(4,9));
    }
    @test.skip "Domain Size for N{32} should be 4^32"() {
      var o = new otk("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN",Math.pow(4,32));
      expect(o.size()).to.equal(Math.pow(4,32));
    }
}

@suite("Oligo Toolkit (GC)", slow(1000), timeout(2000))
class SuiteGC {
    @test "GC content of ATTAC should be 1/5"() {
      var o = new otk("ATTAC");
      expect(o.stat_gc().exact).to.equal(1/5);
    }
    @test "GC content of ATTAN should be max 1/5, min 0 and average 1/10"() {
      var o = new otk("ATTAN");
      expect(o.stat_gc().ext.min).to.equal(0);
      expect(o.stat_gc().ext.max).to.equal(1/5);
      expect(o.stat_gc().mean).to.equal(1/10);
      expect(o.stat_gc().count).to.equal(4);
    }
    @test "GC content of ATTNN should be max 2/5, min 0 and average 1/5"() {
      var o = new otk("ATTNN");
      expect(o.stat_gc().ext.min).to.equal(0);
      expect(o.stat_gc().ext.max).to.equal(2/5);
      expect(o.stat_gc().mean).to.equal(1/5);
      expect(o.stat_gc().count).to.equal(16);
    }
}

@suite("Oligo Toolkit (Tm)", slow(1000), timeout(2000))
class SuiteTm {
    @test "CATATTAC should be about 20.0 °C"() {
      var o = new otk("CATATTAC");
      expect(o.stat_tm().exact).to.be.approximately(20.0,0.1);
    }
    @test "CATATTAN should be about  20.0 °C"() {
      var o = new otk("CATATTAN");
      expect(o.stat_tm().count).to.equal(4);
      expect(o.stat_tm().mean).to.equal(19);
      expect(o.stat_tm().ext.min).to.equal(18);
      expect(o.stat_tm().ext.max).to.equal(20);
    }
}

@suite("Oligo Toolkit (Transforms)", slow(1000), timeout(2000))
class SuiteTransforms {
    @test "CATATTAC reverse complement should be GTAATATG"() {
      var o = new otk("CATATTAC");
      expect(o.reverse_complement()).to.equal("GTAATATG");
    }
    @test "CATATTAN reverse complement should be NTAATATG"() {
      var o = new otk("CATATTAN");
      expect(o.reverse_complement()).to.equal("NTAATATG");
    }
}
