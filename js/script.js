let colors = ['#FFC618', '#FF6418', '#FF1A18', '#FF1894', '#8118FF', '#2218FF', '#18EAFF', '#18FF32', '#FFC618', '#FF6418', '#FF1A18', '#FF1894', '#8118FF', '#2218FF', '#18EAFF', '#18FF32'];

const blocks = document.querySelectorAll('.block');

colors = shuffle(colors);

console.log(colors);
console.log(blocks);

for (let i = 0; i < blocks.length; i++) {
    blocks[i].addEventListener('click', function () {
        // let dataAtrib = blocks[i].dataSet.numberBlock;
        blocks[i].style.backgroundColor = colors[i];
    });
}

// for (let i = 0; i < blocks.length; i ++) {
//     blocks[i].style.backgroundColor = colors[i];
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