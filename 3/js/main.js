let btn = document.querySelector('button');
let resultNode = document.querySelector('.result');

btn.addEventListener('click', function() {
  let value = document.querySelector('input').value;
  let reqURL = `https://picsum.photos/v2/list?page=2&limit=${value}`;
  
  if (!value || value < 0 || value > 10) {
    resultNode.innerHTML = 'число вне диапазона от 1 до 10';
  } else {
    let xhr = new XMLHttpRequest();
    
    xhr.open('GET', reqURL);
    xhr.send();
    
    xhr.onload = function() {
      if (xhr.status != 200) {
        console.log(`Статус ответа ${xhr.status}`)
      } else {
        let responseJSON = JSON.parse(xhr.response)
        let cards = '';
        
        responseJSON.forEach(function(item) {
          let cardBlock = `
            <div class="card">
              <img src="${item.download_url}" alt="card image">
            </div>
          `;
          
          cards += cardBlock;
        });
        
        resultNode.innerHTML = cards;
      }
    }
  }
});