//Assignment no 1 is node installation which is already installed.

//Assignment no 2
//Personal message: store a person's name in a variable , and print a message to
// that person. Your message should be simple , such as 
// Hello Eric, would you like to learn some python today?


let personName:string = "Eric";
let msg = " Hello Eric, would you like to learn some python today?";

console.log(personName, msg);

//Assignment no 3
//Name Cases:Store a person's name in a variable ,and then print that person's name
//in lowercase 'uppercase and titlecase.

let perName:string  = "MAHANOOR";
console.log(perName.toUpperCase()); //uppercase
console.log(perName.toLowerCase()); //lowercase
//titlecase
let prName:string = "i am learning coding";
let words:string[] = prName.split(" ");
let titleCaseName: string = "";

//for loop 1-10
for (let i = 0; i < words.length; i++){
    titleCaseName += words[i].charAt(0).toUpperCase()
    + words[i].slice(1).toLowerCase() + " "
}
console.log(titleCaseName);

//Assignment no 4
//Famous Quote:Find a quote from a famous person you admire.Print the quote and the name of it's author.
//Your output should look something like the following ,including the quotation marks:
//Albert Einstein once said,"A person who never made a mistake never tried anything new."

let famousQuote:string = "A person who never made a mistake never tried anything new.";
let author:string = "Albert Einstein";

console.log(`${author} once said, "${famousQuote}"`);

//Assignment no 5
//Famous Quote 2:Repeat exercise 4,but this time store the famous person's name in a variable called
//famous_person . Then compose your message and store it in a new variable called message. Print your message.

let famous_person:string = " Albert Einstein";
let message: string = `${famous_person} once said, "${famousQuote}"`;

console.log(message);







