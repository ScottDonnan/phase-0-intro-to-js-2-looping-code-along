const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards (array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
return newArray;
}
writeCards(names);


function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(5);
