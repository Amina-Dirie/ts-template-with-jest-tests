// import { add } from "../src/calc";
// describe("test add function", () => {
//   it("should return 15 for add(10,5)", () => {
//     expect(add(10, 5)).toBe(15);
//   });
//   it("should return 5 for add(2,3)", () => {
//     expect(add(2, 3)).toBe(5);
//   });
// });
import { pairWords } from "../src/calc";
describe("pairWords function", () => {
  it("should split 'abc' into ['ab', 'c_']", () => {
    expect(pairWords("abc")).toEqual(["ab", "c_"]);
  });

  it("should split 'abcdef' into ['ab', 'cd', 'ef']", () => {
    expect(pairWords("abcdef")).toEqual(["ab", "cd", "ef"]);
  });

  it("should split 'a' into ['a_']", () => {
    expect(pairWords("a")).toEqual(["a_"]);
  });
  it("should split '' into []", () => {
    expect(pairWords("")).toEqual([]);
  });

  
});