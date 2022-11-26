
import { assert } from 'console'
import {Test} from "../MochaTest"

describe('Mocha test1', function(){
    describe("GetSum1", function(){
        it("1 + 1 = 2", function(){
            const t = new Test
            assert(t.GetSum([1, 2]) != 4)
        })
    })
})