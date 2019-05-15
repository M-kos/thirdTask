let colors = ['#FFC618', '#FF6418', '#FF1A18', '#FF1894', '#8118FF', '#2218FF', '#18EAFF', '#18FF32', '#FFC618', '#FF6418', '#FF1A18', '#FF1894', '#8118FF', '#2218FF', '#18EAFF', '#18FF32'];

const blocks = document.querySelectorAll('.block');
const btnStart = document.querySelector('.start');

let count = 0;
let dataAtrib = [];
let colorStyle = [];

btnStart.addEventListener('click', start);

function start() {
    colors = shuffle(colors);

    blocks.forEach(el => {
        el.addEventListener('click', clickHandler);
    });

    let time = new Date();
    let nowDate = new Date();
    setInterval(timer, 50, time,nowDate);
}

function shuffle(arr){
    var j, temp;
    for(var i = arr.length - 1; i > 0; i--){
        j = Math.floor(Math.random()*(i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

function clickHandler() {
    let atr = this.getAttribute('data-number-block');

    this.style.backgroundColor = colors[atr];
    dataAtrib.push(atr);
    colorStyle.push(colors[atr]);
    check();
}

function check(){
    count++;
    if (count === 2) {
        if (dataAtrib[0] === dataAtrib[1]) {
            count--;
            dataAtrib.pop();
            colorStyle.pop();
        } else {
            if (colorStyle[0] === colorStyle[1]) {
                coincide()
            } else {
                setTimeout(clear, 600);
            }
            count = 0;
        }
    }
}

function clear() {

    blocks.forEach(el => {
        if (el.getAttribute('data-number-block') === dataAtrib[0] || el.getAttribute('data-number-block') === dataAtrib[1]) {
            el.removeAttribute('style');
        }
    });
    dataAtrib.splice(0, 2);
    colorStyle.splice(0, 2);
}

function coincide() {
    blocks.forEach(el => {
        if (el.getAttribute('data-number-block') === dataAtrib[0] || el.getAttribute('data-number-block') === dataAtrib[1]) {
            el.removeEventListener('click', clickHandler);
        }
    });
    dataAtrib.splice(0, 2);
    colorStyle.splice(0, 2);
}


function timer(t, n) {
    const timer = document.getElementById('timer');
    let ms;
    let s;
    let m;

    t.setTime(Date.now() - n);
    ms = t.getUTCMilliseconds();
    s = t.getUTCSeconds();
    m = t.getUTCMinutes();
    if (ms < 100) {
        if (ms < 10) ms = '00' + ms;
        else ms = '0' + ms;
    }
    if (s < 10) s = '0' + s;
    if (m < 10) m = '0' + m;
    timer.innerHTML = m + ':' + s + ':' + ms;
}