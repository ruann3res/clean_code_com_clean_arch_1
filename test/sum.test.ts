import { sum } from "../src/sum";

test("Deve somar 1 mais 2", function(){
    const result = sum(1,2)
    expect(result).toBe(3)
})