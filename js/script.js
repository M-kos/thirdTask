let colors = ['#FFC618', '#FF6418', '#FF1A18', '#FF1894', '#8118FF', '#2218FF', '#18EAFF', '#18FF32', '#FFC618', '#FF6418', '#FF1A18', '#FF1894', '#8118FF', '#2218FF', '#18EAFF', '#18FF32'];

const blocks = document.querySelectorAll('.block');

colors = shuffle(colors);

let count = 0;
let dataAtrib = [];
let colorStyle = [];

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', clickHandler);
}

// if (count === 2) {
//     if (dataAtrib[0] === dataAtrib[1]) {
//         count--;
//     } else {
//         if (colorStyle[0] === colorStyle[1]) {
//             for (let i = 0; i < blocks.length; i++) {
//                 if (blocks[i].getAttribute('data-number-block') === dataAtrib[0] || blocks[i].getAttribute('data-number-block') === dataAtrib[1]) {
//                     blocks[i].removeEventListener('click', clickHandler);
//                 }
//             }
//         } else {
//             for (let i = 0; i < blocks.length; i++) {
//                 if (blocks[i].getAttribute('data-number-block') === dataAtrib[0] || blocks[i].getAttribute('data-number-block') === dataAtrib[1]) {
//                     blocks[i].removeAttribute('style');
//                 }
//             }
//         }
//     }
// }

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
    // let dataAtrib = blocks[i].dataSet.numberBlock;
    // let dataAtrib = blocks[i].getAttribute('data-number-block');
    // console.log(event);
    // console.log(this);
    // blocks[i].style.backgroundColor = colors[i];
    this.style.backgroundColor = colors[this.getAttribute('data-number-block')];
    // count++;
    // dataAtrib.push(blocks[i].getAttribute('data-number-block'));
    // colorStyle.push(colors[i]);
    dataAtrib.push(this.getAttribute('data-number-block'));
    colorStyle.push(colors[this.getAttribute('data-number-block')]);
    check();
    // console.log(dataAtrib);
    // console.log(colorStyle);
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
                for (let i = 0; i < blocks.length; i++) {
                    if (blocks[i].getAttribute('data-number-block') === dataAtrib[0] || blocks[i].getAttribute('data-number-block') === dataAtrib[1]) {
                        blocks[i].removeEventListener('click', clickHandler);
                    }
                }
                dataAtrib.splice(0, 2);
                colorStyle.splice(0, 2);
            } else {
                setTimeout(clear, 500);
                
            }
            count = 0;
        }
    }
}
function clear() {
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].getAttribute('data-number-block') === dataAtrib[0] || blocks[i].getAttribute('data-number-block') === dataAtrib[1]) {
            blocks[i].removeAttribute('style');
        }
    }
    dataAtrib.splice(0, 2);
    colorStyle.splice(0, 2);
}