let btn = document.querySelector('button');
let resultNode = document.querySelector('.result');

if (localStorage.getItem('cards')) {
    resultNode.innerHTML = localStorage.getItem('cards');
}

btn.addEventListener('click', function() {
    let pageNumber = document.querySelectorAll('input')[0].value;
    let limit = document.querySelectorAll('input')[1].value;

    if (!checkNumberInRange(+pageNumber, 1, 10) && !checkNumberInRange(+limit, 1, 10)) {
        resultNode.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    } else if (!checkNumberInRange(+pageNumber, 1, 10)) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else if (!checkNumberInRange(+limit, 1, 10)) {
        resultNode.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } else {
        let reqURL = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
        let cards = '';
        
        fetch(reqURL)
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                json.forEach(function(item) {
                    let cardBlock = `
                        <div class="card">
                            <img src="${item.download_url}" alt="card photo">
                        </div>
                    `
            
                    cards += cardBlock;
                });

                localStorage.setItem('cards', cards);
                resultNode.innerHTML = cards;
            });
    }
});

function checkNumberInRange(x, min, max) {
    if (x < min || x > max || typeof x != 'number' || isNaN(x)) {
      return false;
    }
  
    return true;
}