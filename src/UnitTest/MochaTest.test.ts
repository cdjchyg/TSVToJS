
import {expect} from 'chai'
import { assert } from 'console'
import {Test} from "../MochaTest"

describe('Mocha test', function(){
    describe("GetSum", function(){
        it("1 + 1 = 2", function(){
            const t = new Test
            expect(t.GetSum([1,  1])).to.be.equal(2)
            assert(t.GetSum([1, 2]) == 3)
        })
    })
})