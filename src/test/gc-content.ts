import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import { gc_content } from "../components/gc-content";

@suite("GC-content", slow(1000), timeout(2000))
class Suite {
    @test "GC for ATTA should be 0"() {
      assert.equal(gc_content('ATTA'), 0);
    }
    @test "GC for CATATTAC should be 0.25"() {
      assert.equal(gc_content('CATATTAC'), 0.25);
    }
    @test "Empty string should throw"() {
      expect(() => { gc_content(''); }).to.throw("GC-content calculation requires string to be [ATGC]+"); 
    }
    @test "Characters outside of [ATGC]+"() {
      expect(() => { gc_content('A5TAC'); }).to.throw("GC-content calculation requires string to be [ATGC]+"); 
    }
}