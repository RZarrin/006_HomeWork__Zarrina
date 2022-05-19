//JS Лесенка 

do {
    var num = +prompt('Введите максимальное колличество ступенек');
}while (isNaN(num) || num <= 0) 

do {
    var sym = prompt('Введите символы отступов');
}while (sym == '')
do {
var fsym = prompt('Введите конечный символ');
}while (fsym == '')

for (let i = 0; i < num; i++) {
    fsym = i == 0 ? fsym : sym + fsym;
    console.log(fsym);
}


/*

//до бесконечности пока не будет правильного решения
let x = 4
let y = 4

do {
    x = prompt("2 + 2 ?")
} while (x != y);

while (x != y) {
    x = prompt("2 + 2 ???????")
}
*/
/*
// Желаемое количество строк
let line = +prompt ('Введите цифру');
let space = prompt ('Введите символов');
let star = prompt ('Введите конечный символ');

function a(space, star) {
  for (let line = 1; line <= all; line++) {
    let tab = all - line;
    space ;
    for (let i = 0; i < tab; i++) {
      space = space + '.'
    }
    let star = line * 2 - 1;
    star ;
    for (let j = 0; j < ss; j++) {
      star = star + ' ';
    }
    console.log(space + star)
  }
  }*/