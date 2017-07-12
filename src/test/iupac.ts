import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import * as IUPAC from "../components/iupac";

@suite("IUPAC - Complement", slow(1000), timeout(2000))
class SuiteComplement {
    @test "N should be N"() {
      expect(IUPAC.complement('N')).to.equal('N');
    }
    @test "B should be V"() {
      expect(IUPAC.complement('B')).to.equal('V');
    }
    @test "R should be Y"() {
      expect(IUPAC.complement('R')).to.equal('Y');
    }
}

@suite("IUPAC - Expand", slow(1000), timeout(2000))
class SuiteExpand {
    @test "N should contain only A, C, G & T"() {
      expect(IUPAC.expand('N')).to.include('A');
      expect(IUPAC.expand('N')).to.include('T');
      expect(IUPAC.expand('N')).to.include('G');
      expect(IUPAC.expand('N')).to.include('C');
      assert.equal(IUPAC.expand('N').length, 4);
    }
    @test "5 should trow"() {
      expect(() => { IUPAC.expand('5'); }).to.throw("IUPAC:expand: invalid base"); 
    }
}
