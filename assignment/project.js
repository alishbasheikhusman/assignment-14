// concat

// var a = ["alishba","bisma","usama","fayyz"];
// var b = ["khan","sheikh","shahb"];
// var c = a.concat(b);
// console.log(c);

// join
// var a = ["alishba","bisma","usama","fayyz"];
// var b = a.join('-');
// console.log(b);
 

// shift

// var a = ["alishba","bisma","usama","fayyz"];
//      a.unshift('hunain');
// console.log(a);

// slice


//  var a = ["a","b","c","d","e","f","g"];
//  var b = a.slice(-0,-3);
// console.log(b);


// loop start


    // for(let index = 2; index < 100; index =index + 2){

    //     console.log(index);


    // }

// for(var i = 0; i <= 10; i++){
//     console.log(i);
// }

// var password = 'alishba.1234';
// var hiddenPassword = '*'.repeat(password.length);
// console.log(hiddenPassword);

//  var a = 3.4;
//  var b = Math.round(a);
// console.log(b);

// var a = 46.1;
// var b = Math.ceil(a);
// console.log(b);

// var a = 47.7;d 
// var b = Math.floor(a);
// console.log(b);

// var a = "karachi";
// var letter1 = a.slice(0,1);
// var otherLetter = a.slice(1);
// letter1 = otherLetter.toLocaleUpperCase();
// letter1 = otherLetter.toLocaleLowerCase();
// var word = letter1 + otherLetter;
// console.log(word);


// 21 to 35 chap excerices

// Chapter 21 (Changing Case)
// qus # 1

// var a = ("MY GOOD NAME IS ALISHBA MY FATHER NAME IS USMAN ");
// var b = a.toLowerCase();
// console.log(b);

// qus # 2

// var x = ('peach is my favorit fruit');
// x.toLocaleLowerCase()
// console.log(x);

// qus # 3

// var y = ('my hobby is gym');
// y = y.toLocaleUpperCase();
// console.log(y);

// qus # 4

// var d = ['i am a affable person'];
// var e = d[0].toLocaleLowerCase();
// alert(e.toLocaleUpperCase());

// qus # 5

// var a = ('usman');
// var b = a.charAt(0).toUpperCase() + a.slice(1).toLocaleLowerCase();
// console.log(b);

// qus # 6

// var f = ('harmful warning');
// var g = f.toLocaleUpperCase();
// alert(g);


  // qus # 7


// var cityName =('kaRacHi') ;
// var capital = cityName.charAt(0) + cityName.slice(1).toLocaleLowerCase();
// console.log(capital);


// Chapter 26 (Rounding Numbers)

// qus # 1

// var a = 50.2;
// a = Math.round(a);
// console.log(a);

// qus no # 2

// var a = 56.54
// a = Math.ceil(a);
// console.log(a);

// qus # 3

// var a = 45.89;
//  var b = Math.floor(a);
//  console.log(b);


// qus # 4

// var a = 2.6;
// var b = Math.round(a);
// console.log(b);

// qus # 5

// var w = 0.5;
// var x = Math.round(w);
// console.log(x);

// Chapter 27 (Random Numbers)

// qus no # 1

// var a = Math.floor(Math.random() * 50) + 1 ;
// console.log(a);

// qus no # 2

// var a = Math.random();
// console.log(a);

// qus # 3

// var c = Math.floor(Math.random() * 6) + 1;

// console.log(c);

// qus # 4

// var v = Math.floor(Math.random() * 20) + 1;
// console.log(v);


// Chapter 30 (Controlling the length of
//   decimals)

// qus # 1

// var a = 4.5644;
// var num = a.toFixed(2);
// console.log(num);

// qus # 2

// var a = 45.65;

// var d = Number(a.toFixed(1));
// console.log(d);

// qus # 3


// qus # 4

// var round = 12546.5656;

// var fix = round.toFixed(1).toString();
// console.log(fix);

// Chapter 22 - 25 (Strings)

// qus # 1

// var a = "captain";
// var b = a.slice(1,3);
// console.log(b);

// qus # 2

// var  characters = "alishba";
// var know = characters.length;
// console.log(know);

// qus # 3
 
// let animal = 'elephant';
// let seg = animal.slice(1,5);
// console.log(seg);

// qus # 4

// let a = ('alishba');
// let b = a.length;
// console.log('your leangth character is ' + b); 


// qus # 5

// var a = 'alishba sheikh usman';
// var b = a.length;
// console.log('orignal charecter in this string',+ b);
// var sliced = a.slice(1, -5);
// console.log('slice string:' + sliced);

// qus # 6

// var text = "To be or not to be.";
// var indx = text.indexOf("be");
// console.log(indx);

// qus # 7

// var text = "To be or not to be";
// var indx = text.lastIndexOf("be");
//   console.log(indx);

// qus # 8

// var text = "alishba is my family friend";
// var substring = "my";

// var lastInstanceIndex = text.lastIndexOf(substring);

// if (lastInstanceIndex !== -1) {
//     var indx = lastInstanceIndex;
//     console.log("Index of the first character of the last instance of 'go':", indx);
// } else {
//     console.log("'go' not found in the text.");
// }

// Chapter 31 - 34 (Date & Time)


// qus no # 1

// var now = new Date();
// console.log(now.toDateString());

// qus no 2 

// var dObj = new Date();
// var dStr = dObj.toString();
// console.log(dStr);

// var d = new Date(); // Assuming you have a Date object

// var day = d.toLocaleDateString('en-US', { weekday: 'long' });
// console.log(day);