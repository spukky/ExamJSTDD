var index = require("./index");

describe("Test",()=>{
    test("FizzBuzz",()=>{
        var result = index.FizzBuzz(15);
        expect(result).toEqual("Fizz");
    })
})