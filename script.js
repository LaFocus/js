var username = prompt('Введите ваше имя')
var userage = +prompt('Введите ваш возраст')

alert('Решите следующие примеры')

var addition = +prompt('235 + 123')
var subsctaction = +prompt('1000 - 7')
var mult = +prompt('150 * 2')
var dev = +prompt('1/1')
var rem = +prompt('Остаток от 20/3')

alert('Активируйте консоль разработчика (F12)')

console.log('235 + 123 = ' + (235 + 123) + ' (Ваш ответ: ' + addition + ')');
console.log('1000 - 7 = ' + (1000 - 7) + ' (Ваш ответ: ' + subsctaction + ')');
console.log('150 * 2 = ' + (150 * 2) + ' (Ваш ответ: ' + mult + ')');
console.log('1/1 = ' + (1/1) + ' (Ваш ответ: ' + dev + ')');
console.log('Остаток от 20/3 = ' + (20 % 3) + ' (Ваш ответ: ' + rem + ')');
