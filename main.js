// let name = "Anelya" ,
//     age = 23,
//     balance = 23.5,
//     test = false,
//     x =10,
//     y = 3

// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x%y);
// console.log(x**y)

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 < 4);
// console.log(5=== "5");

// let age =10;
// if(age >=18 && age<60) (
//     console.log("Вы прошли")
// )
// else(
//     console.log("Вы не прошли")
// )


// let x = 5;

// if (x == 4) (
//     console.log("x = 4")
// )
// else if(x == 3) (
//     console.log("x = 3")
// ) 
// else(
//     console.log("wrong")
// )


// let x=3
//     y=5
//     z=9;

// if (x<y && z<y) (
//     console.log("y")
// )
// else if(z<x && y<x) (
//     console.log("x")
// )
// else (
//     console.log("z")
// )

let x;
do {
  x = prompt("Введите ваше имя");
  if(x.length<=3&&x){
    go=false;
    alert("Вы не корректно ввели имя, попробуйте еще раз")
  }
} while (x.length<= 3 && x);


let y = +prompt("Введите свой возраст")

do {if(y < 14){
        y = +prompt("Вы должны быть старше 14 лет, попробуйте еще раз")
    }}
while (y < 14 & y < 60){
}

let z
 do { z = prompt("Вы являетесь студентом?");;
      if(z != "Да"){
        alert("Вы не можете зайти на сайт")
      }
    } while (z != "Да");


alert("Добро пожаловать наш сайт, "+ x +" "+ y);
