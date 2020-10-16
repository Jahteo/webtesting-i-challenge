module.exports = {
  success,
  fail,
  repair,
  get,
};

// item = {
//   name: "",
//   durability: "", //0-100
//   enhancement: "" //0-20
// }

//returns a new tien obj w enhancement increased by 1, max 20, no change to durability
function success(item) {
  return { ...item };
}

//returns a new item obj. if enhancement < 15, durability is decreased by 5.
//if enhancement >= 15, durability is decreased by 10
//if enhancement lvl is > 16, lvl goes down by 1
function fail(item) {
  return { ...item };
}

//accepts an item object, returns a new item object w durability restored to 100
function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
