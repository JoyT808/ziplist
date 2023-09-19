function zipList(list1, list2) {
  const arr = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      arr.push(list1[i]);
      arr.push(list2[i]);
    }
  } else {
    return ('arrays are not the same length');
  }
  return arr;
}

function zipListTheSimpleWay(list1, list2) {
  const zip = _.zip(list1, list2);
  return zip;
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));
