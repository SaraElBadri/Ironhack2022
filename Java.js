const  username = "long string";

if (username.indexOf('z')){ // also can use username.includes(letter)
    console.log("username has the letter" + "z")
}


const letter = 'long';
if (username.indexOf(letter) >= 0){
    console.log(`username has the letter ${letter}`);
}

console.log(username.substring(0,2));
console.log(username.slice(-5,1))

///////

let username;
console.log(username);


if (username !== "pato"){}
if (!(username == "pato")){}

const user = {
    name: "Paco",
    age: 21,
    address: "Barcelona"
}

const user = {
    name: "Joan",
    age: 25,
    address: "Pamplona"
}
console.log(user, user2)

const article = {
    header: "Breaking news!",
    content: "More interesting than before!"
}

article.header = "New header";
article.content = "New content";


const article ={
    header: "Mallorca es la mejor",
    content: "Pero está llena de turistas en verano"
}

const article2 ={
    header: "Barcelona mola mucho",
    content: 'Pero es muy cara'
}

const articles = [
    article1,
    article2
]

for (let i = articles.length -1; i >= 0; i--){
    console.log(articles[i]);
}
delete.article = header;





//
function peintArticle(){


}

const article2 ={
    header: "Barcelona mola mucho",
    content: 'Pero es muy cara',
    date: "2022-11-01"
}
console.log(`<h1> ${article.header}</h1> <h1><div> ${article.content}</div></h1>`)



///

function maxOfTwoNumbers(number1, number2){
    if (number1 > number2){
        return number1;
    } else if (number1 < number2){
        return number2;
    } else {
        return 'Ambos son iguales';
    }

}

//otra opción: MEJOR!

function maxOfTwoNumbers(number1, number2){
    if (number1 > number2){
        return number1;
    } return number2;
}
//OTRA OPCIÓN INCLUSO MEJOR

function maxOfTwoNumbers(number1, number2){
    return number1 > number2;
         ? number1
         : number2;

}