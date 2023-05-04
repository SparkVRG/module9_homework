let btn = document.querySelector('button');
let resultNode = document.querySelector('.result');

btn.addEventListener('click', function() {
  let value1 = document.querySelectorAll('input')[0].value;
  let value2 = document.querySelectorAll('input')[1].value;

  if (!checkNumberInRange(+value1, 100, 300) || !checkNumberInRange(+value2, 100, 300)) {
    resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
  } else {
    let reqURL = `https://picsum.photos/${value1}/${value2}`;
    
    fetch(reqURL)
      .then(function(response) {
        resultNode.innerHTML = `<img src='${response.url}' alt='picsum image'>`;
      });
  }
});

function checkNumberInRange(x, min, max) {
  if (x < min || x > max || typeof x != 'number' || isNaN(x)) {
    return false;
  }

  return true;
}