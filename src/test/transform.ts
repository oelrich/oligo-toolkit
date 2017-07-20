import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import * as transform from "../components/transform";

@suite("Transform (Complement)", slow(1000), timeout(2000))
class SuiteComplement {
    @test "N should be N"() {
      expect(transform.complement('N')).to.equal('N');
    }
    @test "NAG should be NTC"() {
      expect(transform.complement('NAG')).to.equal('NTC');
    }
    @test "TAC should be ATG"() {
      expect(transform.complement('TAC')).to.equal('ATG');
    }
}
@suite("Transform (Reverse)", slow(1000), timeout(2000))
class SuiteReverse {
    @test "N should be N"() {
      expect(transform.reverse('N')).to.equal('N');
    }
    @test "NAG should be GAN"() {
      expect(transform.reverse('NAG')).to.equal('GAN');
    }
    @test "TAC should be CAT"() {
      expect(transform.reverse('TAC')).to.equal('CAT');
    }
}
@suite("Transform (Reverse complement)", slow(1000), timeout(2000))
class SuiteReverseComplement {
    @test "N should be N"() {
      expect(transform.reverse_complement('N')).to.equal('N');
    }
    @test "ANAAGTA should be TACTTNT"() {
      expect(transform.reverse_complement('ANAAGTA')).to.equal('TACTTNT');
    }
    @test "TAG should be CTA"() {
      expect(transform.reverse_complement('TAG')).to.equal('CTA');
    }
    @test "TAGCATATTAC should be GTAATATGCTA"() {
      expect(transform.reverse_complement('TAGCATATTAC')).to.equal('GTAATATGCTA');
    }
    @test "GATTACA should be TGTAATC"() {
      expect(transform.reverse_complement('GATTACA')).to.equal('TGTAATC');
    }
    @test "TAGCNAABBAATTACGGGVVVTTR should be YAABBBCCCGTAATTVVTTNGCTA"() {
      expect(transform.reverse_complement('N')).to.equal('N');
    }
}
