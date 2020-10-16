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
  return (
    item.enhancement<20 ? { ...item, enhancement: item.enhancement+1 }
    : {...item}
  )
}

//returns a new item obj. if enhancement < 15, durability is decreased by 5.
//if enhancement >= 15, durability is decreased by 10
//if enhancement lvl is > 16, lvl goes down by 1
function fail(item) {
  if(item.enhancement < 15) {
      return {...item, durability: item.durability-5}
    } else if (item.enhancement === 15) {
      return {...item, durability: item.durability-10}
    } else {
      return {...item, durability: item.durability-10, enhancement: item.enhancement-1}
    }

}

//accepts an item object, returns a new item object w durability restored to 100
function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
