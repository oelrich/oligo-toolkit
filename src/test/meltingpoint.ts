import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import * as Tm from "../components/meltingpoint";

@suite("Meltingpoint - Basic", slow(1000), timeout(2000))
class SuiteBasic {
    @test "CATATTAC should be about 20.0 °C"() {
      expect(Tm.basic('CATATTAC')).to.be.approximately(20.0,0.1);
    }
    @test "CATATTACGGAATAGTCA should be about 41.2 °C"() {
      expect(Tm.basic('CATATTACGGAATAGTCA')).to.approximately(41.2,0.1);
    }
    @test "CATAGTAATAGTCATTACG should be about 42.5 °C"() {
      expect(Tm.basic('CATAGTAATAGTCATTACG')).to.approximately(42.5,0.1);
    }
    @test "TAGTCA should be about 16.0 °C"() {
      expect(Tm.basic('TAGTCA')).to.approximately(16.0,0.1);
    }
    @test "TAGCAT should be about 16.0 °C"() {
      expect(Tm.basic('TAGCAT')).to.approximately(16.0,0.1);
    }
}

@suite.skip ("Meltingpoint - NN", slow(1000), timeout(2000))
class SuiteNN {
    @test "CATATTAC (200 nM, 50 mM, 0 mM) should be about -0.8 °C"() {
      expect(Tm.nn('CATATTAC')).to.approximately(-0.8,0.1);
    }
    @test "CATATTACGGAATAGTCA (200 nM, 50 mM, 0 mM) should be about 42.7 °C"() {
      expect(Tm.nn('CATATTACGGAATAGTCA')).to.approximately(42.7,0.1);
    }
    @test "CATAGTAATAGTCATTACG (200 nM, 50 mM, 0 mM) should be about 42.1 °C"() {
      expect(Tm.nn('CATAGTAATAGTCATTACG')).to.approximately(42.1,0.1);
    }
    @test "TAGTCA (200 nM, 50 mM, 0 mM) should be about -17.6 °C"() {
      expect(Tm.nn('TAGTCA')).to.approximately(-17.6,0.1);
    }
    @test "TAGCAT (200 nM, 50 mM, 0 mM) should be about -15.1 °C"() {
      expect(Tm.nn('TAGCAT')).to.approximately(-15.1,0.1);
    }
}
