
let left = document.getElementById('btn1');
let right = document.getElementById('btn2');

let img = document.getElementsByTagName('img');
let index = 0;

left.onclick = function () {
    img[index].style.display = 'none';
    if (index === 0) {
        index = img.length-1;
        img[index].style.display = 'block';
    }
    else {
        img[index].style.display = 'none';
        index = index-1;
        img[index].style.display = 'block';
    }
}


right.onclick = function () {
    img[index].style.display = 'none';
    if (index === img.length-1) {
        index = 0;
        img[index].style.display = 'block';
    }
    else {
        img[index].style.display = 'none';
        index = index+1;
        img[index].style.display = 'block';
    }
}
