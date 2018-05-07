var arr = [-1, 3, 5, -5, -7, 9];

var p =[];
var otr = [];
arr.forEach(function (item, i, arr) {
    item < 0 ? p.push(item) : otr.push(item);
})

console.log(p);
console.log(otr);