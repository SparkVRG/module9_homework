let xmlString = `
  <list>
    <student>
     <name lang="en">
       <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
   </student>
   <student>
      <name lang="ru">
       <first>Петр</first>
       <second>Петров</second>
     </name>
     <age>58</age>
      <prof>driver</prof>
   </student>
  </list>
`;

let parser = new DOMParser();
let xmlDOM = parser.parseFromString(xmlString, 'text/xml');
let students = xmlDOM.querySelector('list').querySelectorAll('student');

let result = {};
result.list = parseStudents(students);

console.log(result);

function parseStudents(arr) {
  let result = [];
  
  arr.forEach(function(item, index) {
    let obj = {};
    
    obj.name = `${arr[index].querySelector('first').textContent} ${arr[index].querySelector('second').textContent}`
    obj.age = arr[index].querySelector('age').textContent;
    obj.prof = arr[index].querySelector('prof').textContent;
    obj.lang = arr[index].querySelector('name').getAttribute('lang');
    
    result.push(obj);
  })
  
  return result;
}