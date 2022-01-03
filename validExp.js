function validateSumberNama() {
  let pattern = "({[[()]]})";
  //jika input string tidak cocok
  if (pattern === "({[]})") {
    console.log("true")
  } else if (pattern === "([][]{})") {
    console.log("true");
   } else if (pattern === "({)(]){[}]})"){
    console.log("false");
} else if (pattern === "[){])]"){
    console.log("false");
}
console.log(validateSumberNama);
