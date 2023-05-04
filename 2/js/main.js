let jsonString = `
  {
   "list": [
      {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
      },
      {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
      }
    ]
  }
`;

let data = JSON.parse(jsonString);
let students = data.list;

let result = {};
result.list = parseStudents(students);

console.log(result);

function parseStudents(arr) {
  let result = [];
  
  arr.forEach(function(item, index) {
    let obj = {};
    
    obj.name = arr[index].name;
    obj.age = arr[index].age;
    obj.prof = arr[index].prof;
    
    result.push(obj);
  })
  
  return result;
}