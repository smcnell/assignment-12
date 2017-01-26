// EXAMPLE:
// makeNamesObject("George Washington, John Adams, Kanye West")
//   => {
//     George: "Washington",
//     John: "Adams",
//     Kanye: "West"
//   }
//
// input: string
// output: object


var makeNamesObject= function(name1, name2, name3){
  var testArray = []
  var NameObj= {};

  testArray.push(name1.split(' '))
  testArray.push(name2.split(' '))
  testArray.push(name3.split(' '))


  // console.log(testArray)
  //
  // nameArray= fullName.split(" ")
  //
  // firstname = "geroge"
  // lastname = "Washington"
  //
  // obj[firstname] = lastname

  for(var i=0; i < testArray.length; i++){
    var crntAry = testArray[i]
    NameObj[crntAry[0]]= crntAry[1]
  }
  return NameObj;
}








//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var greatMenObj = makeNamesObject("George Washington", "Abe Lincoln", "Kanye West")
var greatWomenObj = makeNamesObject("Rosa Parks", "Amelia Earhart", "Charlotte Webb")

console.assert(greatMenObj.George === "Washington")
console.assert(greatMenObj['Abe'] === "Lincoln")
console.assert(greatMenObj.Kanye === "West")
//-------------------
console.assert(greatWomenObj.Rosa === "Parks")
console.assert(greatWomenObj.Charlotte === "Webb")
