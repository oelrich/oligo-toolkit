import { suite, test, timeout, slow } from "mocha-typescript";
import { assert, expect } from "chai";
import * as otk from "../components/otk";

@suite("Oligo Toolkit", slow(1000), timeout(2000))
class Suite {
    @test "Write test to ensure that magic works as intended?"() {
      assert.isTrue(true);
    }
}
