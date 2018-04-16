import { suite, test } from "mocha-typescript";
import assert = require('assert');

import { Calculator } from './main';

@suite
class SuiteStyleTest {

   @test
   calculator_add() {
      let a: number[] = [1, 2, 3];
      assert.equal(a.length, 3);
   }
}


