const a = {
    name:" Bangladesh",
    districts:64,
};
const s = " Bangladesh";
console.log(s.length);

//slice(start, end)
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));

/* substring(start, end)
substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().*/

 str = "Apple, Banana, Kiwi";
console.log(str.substring(7, 13));
/*substr(start, length).
 substr() is similar to slice().The difference is that the second parameter specifies the length of the extracted part.*/
 str = "Apple, Banana, Kiwi";
 console.log(str.substr(7));
 //Replacing String Content
  str=" i love myself ";
 let nirob = str.replace("myself","nirob");
 console.log(nirob);

 //Converting to Upper and Lower Case
 let text = "Hello World!";
 console.log(text.toUpperCase());
 //String concat()
 //concat() joins two or more strings
 let text1 = "Hello";
let text2 = "World";
console.log(text1.concat(" ", text2));
//String trim()
//The trim() method removes whitespace from both sides of a string:
 text1 = "      Hello World!      ";
console.log( text1.trim());
//String split()
text=" nirob hasan ";
console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split("|"));
