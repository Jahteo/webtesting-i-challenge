const { success, fail, repair, get } = require('./enhancer.js');
// test away!


item = {
  name: "",
  durability: "", //0-100
  enhancement: "" //0-20
}
sadItem = {
  name: "sward of trooth",
  durability: 5, //0-100
  enhancement: 0 //0-20
}
epicItem = {
  name: "SWORD OF AWESOME",
  durability: 97, //0-100
  enhancement: 20 //0-20
}

describe("repair()", () => {
  it("should return an object w duribility = 100", () => {
    expect(repair(sadItem).durability).toEqual(100)
  })
})

describe("success()", () => {
  it("should increase enhancement by 1", () => {
    expect(success(sadItem).enhancement).toBe(1)
  })
  it("should not increase enhancement above 20", () => {
    expect(success(epicItem).enhancement).toBe(20)
  })
  it("should not change durability", () => {
    expect(success(sadItem).durability).toBe(5)
    expect(success(epicItem).durability).toBe(97)
  })
})

describe("fail()", () => {
  it("should decrease durability by 5 if enhancement is less that 15", () => {
    expect(fail(sadItem).durability).toBe(0)
  })
  it("should decrease durability by 10 if enhancement is 15 or more", () => {
    expect(fail(epicItem).durability).toBe(87);
  })
  it("should decrease enhancement by 1 if item.enchancement is greater than 16", () => {
    expect(fail(epicItem).enhancement).toBe(19)
  })
})