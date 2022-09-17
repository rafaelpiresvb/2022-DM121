console.log("💖 Hi there! I'm a JavaScript!");

let languageName = "JavaScript";
console.log(`This is a ${getName()} file!`);

function getName() {
  return "JavaScript";
}

const number = getName;
console.log("The const number have the type:", typeof number);

const names = ["Kurosaki Ichigo", "Didi Mocó", "Bruce Wayne"];
const print = (name) => console.log(name);
const printFancy = function (name, index, list) {
  console.log(`${index + 1}/${list.length}`, name);
};

names
  .sort()
  // .reverse()
  // .map(name => `☠️ ${name} ☠️`)
  .forEach(print);