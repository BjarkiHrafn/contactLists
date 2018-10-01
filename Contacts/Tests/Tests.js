const data = require("../assets/ass2data.json");

const sorted = data.sort(function(a, b) {
  if (a.name.first_name < b.name.first_name) return -1;
  if (a.name.first_name > b.name.first_name) return 1;
  return 0;
});

const doubleArr = sorted.reduce((acc, info) => {
  const firstletter = info.name.first_name[0];
  if (!acc[firstletter]) {
    acc[firstletter] = [];
  }
  acc[firstletter].push(info);
  return acc;
}, {});

console.log(doubleArr);

/*let sectionArr = [];
for (let key in doubleArr) {
  sectionArr.push({ title: key, data: doubleArr[key] });
}*/

//concerts: res.results.map((c, i) => ({ ...c, key: `${i}` }))

/*const tibi = [1, 2, 3];

const sectionArr = tibi.map((c, i) => ({ ...c, key: `${i}` }));*/

//console.log(sectionArr);
