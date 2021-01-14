var counter = document.querySelector('.counter');
var addCount = document.querySelector('#addCountBtn');
var lowerCount = document.querySelector('#lowerCountBtn');


var count = 0;


addCount.addEventListener('click', incrementCounter);
lowerCount.addEventListener('click', decrementCounter);


function incrementCounter() {
    count++;
    counter.innerHTML = count;
    if (counter.innerHTML > '0') {
        counter.style.color = 'rgb(37, 238, 37)'
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white'
    }

    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 200, fill: 'forwards' });
}

function decrementCounter() {
    count--;
    counter.innerHTML = count;
    if (counter.innerHTML < '0') {
        counter.style.color = 'red'
    }
    else if (counter.innerHTML === '0') {
        counter.style.color = 'white'
    }

    counter.animate([{ opacity: '0.2' }, { opacity: '1.0' }], { duration: 200, fill: 'forwards' });
}


