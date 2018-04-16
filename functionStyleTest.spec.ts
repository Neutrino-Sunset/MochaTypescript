import 'mocha';
import assert = require('assert');

import { Calculator } from './main';

describe('Calculator', function() {
   describe('#add()', function() {
      it('should add the two numbers', function() {
         let calc = new Calculator();
         let result = calc.add(5, 4);
         assert.equal(result, 9);
      });
   });
});
