
function countCats(backyard) {
  let count=0;
  for (let elem of backyard) {
    for (let item of elem) {
      if (item == '^^') {
        count++;
      }
    }
  }
    console.log(count);
    return count;
  }

  // remove line with error and write your code here

module.exports = {
  countCats
};
